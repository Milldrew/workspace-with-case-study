import { Component, Input } from '@angular/core';

@Component({
  selector: 'milldrew-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent {
  @Input()
  cardTitle = 'Title';
  @Input()
  imgSrc = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  isActive = false;
  constructor() {}

  handleCardClick() {
    this.isActive = true;
  }
  handleMouseOver() {
    this.isActive = true;
  }
  handleMouseOut() {
    this.isActive = false;
  }
}
