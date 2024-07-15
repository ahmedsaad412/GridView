import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }
  currentSortedField: string='';
isAscending: boolean = true;

sortBy(field: string, data: any[]) {
  if (field === this.currentSortedField) {
    this.isAscending = !this.isAscending;
  } else {
    this.currentSortedField = field;
    this.isAscending = true;
  }

  data.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];
    if (aValue < bValue) return this.isAscending ? -1 : 1;
    if (aValue > bValue) return this.isAscending ? 1 : -1;
    return 0;
  });
}

}
