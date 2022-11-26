import { Input, Directive } from '@angular/core';

@Directive({
  selector: '[milldrewMaximizeCard]',
})
export class MaximizeCardDirective {
  @Input()
  cardId: string;
}
