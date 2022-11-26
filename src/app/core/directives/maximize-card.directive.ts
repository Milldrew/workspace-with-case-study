import * as d3 from 'd3';
import { Input, Directive } from '@angular/core';

@Directive({
  selector: '[milldrewMaximizeCard]',
})
export class MaximizeCardDirective {
  @Input()
  cardId: string;

  cardSelection: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;

  ngAfterViewInit() {
    this.cardSelection = d3.select('#' + this.cardId);
  }
}
