import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[autoselect]'
})
export class AutoselectDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.select();
  }

}
