import { Component } from '@angular/core';
import { ViewStateService } from './core/services/view-state.service';

@Component({
  selector: 'milldrew-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public viewStateService: ViewStateService) {}
}
