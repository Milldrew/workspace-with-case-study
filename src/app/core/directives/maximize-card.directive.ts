import * as d3 from 'd3';
import { Input, Directive } from '@angular/core';

@Directive({
  selector: '[maximizeCard]',
})
export class MaximizeCardDirective {
  @Input()
  cardId: string;

  isMaximixed = false;
  originalSize: string;
  cardSelection: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  parentSVGWidth: string;

  ngAfterViewInit() {
    this.cardSelection = d3.select('#' + this.cardId);
    console.log(this.cardSelection);
    this.maximizeCardOnClick();
    this.parentSVGWidth = d3.select('#parent-svg').style('width');
    this.originalSize = this.cardSelection.style('width');
    this.cardSelection.style('width', this.originalSize);
  }

  maximizeCardOnClick() {
    this.cardSelection.on('click', () => {
      if (this.isMaximixed) {
        this.minimizeAnimation();
      } else {
        this.maximizeAnimation();
      }
    });
  }
  maximizeCardAnimation() {
    const maximize = this.cardSelection.transition('maximize');
    maximize.duration(1000);
    maximize.ease(d3.easeLinear);
    maximize.style('width', this.parentSVGWidth);
  }
  maximizeAnimation() {
    const maximize = this.cardSelection.transition('maximize');
    maximize.duration(1000);
    maximize.ease(d3.easeLinear);
    maximize.style('width', this.parentSVGWidth);
    maximize.on('end.maximize', () => {
      this.isMaximixed = true;
    });
  }

  minimizeAnimation() {
    const minimize = this.cardSelection.transition('minimize');
    minimize.duration(1000);
    minimize.ease(d3.easeLinear);
    minimize.style('width', this.originalSize);
    minimize.on('end.minimize', () => {
      this.isMaximixed = true;
    });
  }
}
