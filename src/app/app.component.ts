import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountComponent } from './count/count.component';
import { FormsComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, CountComponent, FormsComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "";
  get(){
    return "Hello";
  }
  count=0;
  getCount(){
    this.count++;
  }

  user={
    name:"rvii",
    age:21
  }
  name:String='';
  names:String[]=[];
  onUserAdded(userName:String){
    this.name=userName;
    console.log(userName,"from Form-app");
    this.names.push(this.name);
  }
}
