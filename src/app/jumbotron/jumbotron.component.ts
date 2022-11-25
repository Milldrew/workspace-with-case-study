import * as d3 from 'd3';
import { Component } from '@angular/core';

@Component({
  selector: 'milldrew-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent {
  constructor() {}

  ngAfterViewInit() {
    const signGroup = d3.select('sign-group');
  }
}
