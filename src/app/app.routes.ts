import { Routes } from '@angular/router';
import { TicketComponent } from './components/dynamic-grid/ticket/ticket.component';

export const routes: Routes = [
  {path:"ticket/:id" ,component :TicketComponent}
];
