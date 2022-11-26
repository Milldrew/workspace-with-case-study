import { Component, Input } from '@angular/core';

@Component({
  selector: 'milldrew-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent {
  @Input()
  cardTitle = 'Title';
  constructor() {}
}
