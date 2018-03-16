import { Component, OnInit } from '@angular/core';
import { routeAnimations } from './todo.animations';

import { TodoService } from '../../services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    routeAnimations()
  ]
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'appAnimation';
  }

  onRouteAnimationDone(evt) {
    this.todoService.setRouteAnimationState('done');
  }
}
