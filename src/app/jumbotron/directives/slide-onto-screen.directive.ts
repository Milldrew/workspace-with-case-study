import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[slideOntoScreen]',
})
export class SlideOntoScreenDirective {
  /**
   * The x value that the svg element will slide to
   */
  @Input()
  stopLocation: number = 50;
  @Input()
  elementId: string = '';
  hostElement: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  ngOnChanges(_changes: SimpleChanges): void {}

  ngAfterViewInit() {
    this.hostElement = d3.select(`#${this.elementId}`);
    this.moveIntoPlace();
  }
  moveIntoPlace() {
    const move = this.hostElement.transition('move').duration(3000);
    console.log();
    move.attr('x', this.stopLocation);
  }
}
