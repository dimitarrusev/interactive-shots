import { Component, OnInit } from '@angular/core';
import { routeAnimations } from './todo.animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    routeAnimations()
  ]
})
export class TodoComponent implements OnInit {
  animationDone: boolean = false;

  constructor() {}

  ngOnInit() {}

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'appAnimation';
  }
}
