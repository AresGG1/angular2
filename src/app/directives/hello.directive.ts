import {Directive, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective implements OnChanges {
  @Input() roleName: string | boolean

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (!changes['roleName'].currentValue) {
      return
    }
    const message = "Hello, " + changes['roleName'].currentValue
    this.renderer.setProperty(this.el.nativeElement, 'innerText', message)
  }
}
