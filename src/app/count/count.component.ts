import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-count',
  imports: [CommonModule,FormsModule,HighlightDirective],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  show=false;
  count=0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }

  fruits=[
    "apple",
    "banana",
    "orange"
  ]
}
