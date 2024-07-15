import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingService } from '../../../core/sorting.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.css'
})
export class DynamicGridComponent implements OnChanges {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];

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
}


