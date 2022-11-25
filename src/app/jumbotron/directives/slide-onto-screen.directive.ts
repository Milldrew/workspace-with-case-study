import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[slideOntoScreen]',
})
export class SlideOntoScreenDirective {
  @Input()
  isContinuous: boolean;
  /**
   * Length of animation
   */
  @Input()
  duration: number;
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
    const move = this.hostElement.transition('move').duration(this.duration);
    console.log();
    move.attr('x', this.stopLocation);
    if (this.isContinuous) {
      move.on('end', () => {
        this.hostElement.attr('x', -700);
        this.moveIntoPlace();
      });
    }
  }
}
