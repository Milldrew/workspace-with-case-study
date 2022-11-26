import * as d3 from 'd3';
import { Input, Directive } from '@angular/core';

@Directive({
  selector: '[maximizeCard]',
})
export class MaximizeCardDirective {
  @Input()
  cardId: string;

  cardSelection: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  parentSVGWidth: string;

  ngAfterViewInit() {
    this.cardSelection = d3.select('#' + this.cardId);
    console.log(this.cardSelection);
    this.maximizeCardOnClick();
    this.parentSVGWidth = d3.select('#parent-svg').style('width');
    this.cardSelection.style('width', this.cardSelection.style('width'));
  }

  maximizeCardOnClick() {
    this.cardSelection.on('click', () => {
      this.maximizeAnimation();
    });
  }
  maximizeAnimation() {
    const maximize = this.cardSelection.transition('maximize');
    maximize.duration(1000);
    maximize.ease(d3.easeLinear);
    maximize.style('width', this.parentSVGWidth);
  }
}
