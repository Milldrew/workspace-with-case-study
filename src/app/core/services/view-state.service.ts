import { Injectable } from '@angular/core';
export type VisibleComponent =
  | 'jumbotron'
  | 'aboutCard'
  | 'credentialsCard'
  | 'studiesCard'
  | 'contactCard';

@Injectable({
  providedIn: 'root',
})
export class ViewStateService {
  allComponents: VisibleComponent[] = [
    'jumbotron',
    'aboutCard',
    'credentialsCard',
    'studiesCard',
    'contactCard',
  ];
  visibleComponents: VisibleComponent[] = [
    'jumbotron',
    'aboutCard',
    'credentialsCard',
    'studiesCard',
    'contactCard',
  ];
}
