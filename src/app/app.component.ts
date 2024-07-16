import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DynamicGridComponent,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  Headers: string[] = ['id', 'status', 'complain_provider' ,'mangement','for','title'];
  Tickets: any[] = [
    { id: 1,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"ahmed" ,title: "Title ",  IsSelected: false },
    { id: 2,status:"normal", complain_provider:"ahmed" ,mangement:"technical support" ,for:"shawqi" ,title: "Title ",  IsSelected: false },
    { id: 3,status:"normal", complain_provider:"ali" ,    mangement:"technical support" ,for:"Ahmed" ,title: "Title ",  IsSelected: false },
    { id: 4,status:"normal", complain_provider:"saleh" ,    mangement:"IT" ,for:"fayez" ,title: "Title ",  IsSelected: false },
    { id: 5,status:"normal", complain_provider:"ali" ,    mangement:"IT" ,for:"Ahmed" ,title: "Title ",  IsSelected: false },
    { id: 6,status:"normal", complain_provider:"ali" ,    mangement:"IT" ,for:"azmy" ,title: "Title ",  IsSelected: false },
    { id: 7,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"Sara" , title: "Title ",  IsSelected: false },
    { id: 8,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"sss" , title: "Title ",  IsSelected: false },
    { id: 9,status:"normal", complain_provider:"nada" ,mangement:"technical support" ,for:"Sara" , title: "Title ",  IsSelected: false },
    { id: 10,status:"normal", complain_provider:"yasmine" ,mangement:"technical support" ,for:"nada" , title: "Title ", IsSelected: false },
    { id: 11,status:"normal", complain_provider:"omar" ,   mangement:"technical support" ,for:"Mona" , title: "Title ", IsSelected: false },
    { id: 12,status:"normal", complain_provider:"nader" ,   mangement:".NET" ,for:"Mona" , title: "Title ", IsSelected: false },
    { id: 13,status:"normal", complain_provider:"omar" ,   mangement:".NET" ,for:"osman" , title: "Title ", IsSelected: false },
    { id: 14,status:"normal", complain_provider:"amr" ,   mangement:".NET" ,for:"Mona" , title: "Title ", IsSelected: false },
    { id: 15,status:"normal", complain_provider:"omar" ,   mangement:"echnical support" ,for:"Mona" , title: "Title ", IsSelected: false },
  ];
  handleSaveData(updatedData: any) {

    this.Tickets.map(a=>{
      if(a.id==updatedData.id){
        return updatedData
      }
      return a;
    });
  }
  handleDeleteData(id :any){
      this.Tickets= this.Tickets.filter(ticket => ticket.id !== id);

  // this.Tickets.splice(this.Tickets.findIndex(a => a.id ===id) , 1)
  }
}

{
}


