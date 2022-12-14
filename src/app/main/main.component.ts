import { Component } from '@angular/core';
import {
  ViewStateService,
  VisibleComponent,
} from '../core/services/view-state.service';

@Component({
  selector: 'milldrew-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public viewStateService: ViewStateService) {}

  handleSelectedCardView(cardName: VisibleComponent) {
    this.viewStateService.visibleComponents = [cardName];
  }
}
