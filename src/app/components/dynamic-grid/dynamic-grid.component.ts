import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.css'
})
export class DynamicGridComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];

 
}
