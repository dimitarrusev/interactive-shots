import { Component, OnInit } from '@angular/core';
import { routeAnimations } from './todo.animations';

import { RouteCommunicationService } from '../../../core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    routeAnimations()
  ]
})
export class TodoComponent implements OnInit {
  constructor(
    private routeCommunicationService: RouteCommunicationService
  ) {}

  ngOnInit() {}

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'appAnimation';
  }

  onRouteAnimationDone(evt) {
    this.routeCommunicationService.setRouteAnimationState('done');
  }
}
