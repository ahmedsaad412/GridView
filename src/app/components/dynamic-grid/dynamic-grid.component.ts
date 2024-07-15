import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingService } from '../../../core/sorting.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule ],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.css'
})
export class DynamicGridComponent implements OnChanges {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Output() saveData: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteData: EventEmitter<any> = new EventEmitter<any>();
  editingRowIndex: number = -1;
  shallowCopy: any[] = [];
  constructor(private sortingService: SortingService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.totalPages = Math.ceil(this.data.length / this.pageSize);
      this.currentPage = 1;
    }
  }

currentPage: number = 1;
pageSize: number = 10;
totalPages:number =this.data.length;
get paginatedData() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  return this.data.slice(startIndex, startIndex + this.pageSize);
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

sortBy(field: string) {
  this.sortingService.sortBy( field , this.data);
}
editModeEntered(index: number) {
  this.editingRowIndex = index;
  // Make a copy of the original data for rollback if needed
  this.shallowCopy[index] = { ...this.data[index] };
}

saveRow(index: number ,a :any) {
  this.saveData.emit(this.data[index]);
  this.editingRowIndex = -1;
}

cancelEdit(index: number) {
  // Restore original data
  this.data[index] = { ...this.shallowCopy[index] };
  this.editingRowIndex = -1;
}
deleteRow(row :any){
  console.log('row' +JSON.stringify(row));
  console.log('row id' +JSON.stringify(row.id));
  this.deleteData.emit(row.id);
}
}


