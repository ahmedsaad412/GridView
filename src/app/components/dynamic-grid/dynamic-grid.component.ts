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
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages:number =this.data.length;
  editingRowIndex: number = -1;
  shallowCopy: any[] = [];
  constructor(private sortingService: SortingService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.totalPages = Math.ceil(this.data.length / this.pageSize);
      this.currentPage = 1;
    }
  }
  //////sorting
  sortBy(field: string) {
    this.sortingService.sortBy( field , this.data);
  }

//////pagination //retrive subset from data []
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


////////// editing
editModeEntered(index: number) {
  this.editingRowIndex = index;
  this.shallowCopy[index] = { ...this.data[index] };
}
saveRow(index: number ,a :any) {
  this.saveData.emit(this.data[index]);
  this.editingRowIndex = -1;
}
cancelEdit(index: number) {
  this.data[index] = { ...this.shallowCopy[index] };
  this.editingRowIndex = -1;
}

///////////deleting
deleteRow(row :any){
  this.deleteData.emit(row.id);
}
}


