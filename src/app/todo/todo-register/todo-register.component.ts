import { Component, OnInit } from '@angular/core';
import { animation } from './todo-register.animations';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss'],
  animations: [
    animation()
  ]
})
export class TodoRegisterComponent implements OnInit {
  initializeAnimation: boolean = false;
  animationState: 'void' | 'play' = 'void';
  startAnimationBtnState: 'enabled' | 'disabled' = 'enabled';
  startAnimationBtnIcon: 'play_arrow' | 'replay' = 'play_arrow';
  startAnimationBtnTooltipText: 'play' | 'replay' = 'play';
  startAnimationBtnTooltpPosition: 'before' | 'after' | 'above' | 'below' | 'left' | 'right' = 'above';

  constructor() {}

  ngOnInit() {}

  triggerAnimation() {
    this.initializeAnimation = true;
    this.animationState = 'play';
    this.startAnimationBtnState = 'disabled';
    this.startAnimationBtnIcon = (!this.initializeAnimation) ? 'play_arrow' : 'replay';
  }

  resetAnimationState() {
    this.animationState = 'void';
    this.startAnimationBtnState = 'enabled';
    this.startAnimationBtnTooltipText = 'replay';
  }

  onAnimationDone(evt) {
    if (evt.fromState === 'void' && evt.toState === 'play') {
      this.resetAnimationState();
    }
  }
}
