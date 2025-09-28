import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[autoselect]',
  standalone: true
})
export class AutoselectDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.select();
  }

}
