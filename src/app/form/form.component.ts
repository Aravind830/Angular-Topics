import { Component, Output ,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormsComponent {
  userName:String="";
  @Output() added=new EventEmitter<String>();

  onSubmit(){
    console.log("Submitted Working..!!");
    this.added.emit(this.userName);
    this.userName='';
  }
}
