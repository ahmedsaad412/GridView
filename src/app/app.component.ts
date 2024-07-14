import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DynamicGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  Headers: string[] = ['id', 'status', 'complain_provider' ,'mangement','for','title','IsSelected'];
  Tickets: any[] = [
    { id: 1,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"ahmed" ,title: "Title ",  IsSelected: false },
    { id: 2,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"ahmed" ,title: "Title ",  IsSelected: false },
    { id: 3,status:"normal", complain_provider:"ali" ,    mangement:"technical support" ,for:"Ahmed" ,title: "Title ",  IsSelected: false },
    { id: 4,status:"normal", complain_provider:"ali" ,    mangement:"technical support" ,for:"Ahmed" ,title: "Title ",  IsSelected: false },
    { id: 5,status:"normal", complain_provider:"ali" ,    mangement:"technical support" ,for:"Ahmed" ,title: "Title ",  IsSelected: false },
    { id: 6,status:"normal", complain_provider:"ali" ,    mangement:"technical support" ,for:"Ahmed" ,title: "Title ",  IsSelected: false },
    { id: 7,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"Sara" , title: "Title ",  IsSelected: false },
    { id: 8,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"Sara" , title: "Title ",  IsSelected: false },
    { id: 9,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"Sara" , title: "Title ",  IsSelected: false },
    { id: 10,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"Sara" , title: "Title ", IsSelected: false },
    { id: 11,status:"normal", complain_provider:"omar" ,   mangement:"technical support" ,for:"Mona" , title: "Title ", IsSelected: false },
    { id: 12,status:"normal", complain_provider:"omar" ,   mangement:"technical support" ,for:"Mona" , title: "Title ", IsSelected: false },
    { id: 13,status:"normal", complain_provider:"omar" ,   mangement:"technical support" ,for:"Mona" , title: "Title ", IsSelected: false },
    { id: 14,status:"normal", complain_provider:"omar" ,   mangement:"technical support" ,for:"Mona" , title: "Title ", IsSelected: false }
  ];
}
{

}
