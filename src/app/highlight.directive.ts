import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() apHighligt:String="";
  constructor(private ele:ElementRef) {}

  @HostListener('mouseenter') onEnter(){
  this.onChange(this.apHighligt || 'yellow');
  }

  @HostListener('mouseleave') onleave(){
    this.onChange('');
    }

  private onChange(clour:any){
    this.ele.nativeElement.style.backgroundColor=clour;
  }

}
