import { Component, OnInit } from '@angular/core';
import { viewsContainerflyInOutAnimation, defaultViewFadeOutAnimation, hoverViewFadeOutAnimation } from './todo-register.animations';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss'],
  animations: [
    viewsContainerflyInOutAnimation(),
    defaultViewFadeOutAnimation(),
    hoverViewFadeOutAnimation()
  ]
})
export class TodoRegisterComponent implements OnInit {
  initAnimation: boolean = false;
  backgroundLeftPanelWidth: number = 0;
  viewsContainerflyInOutAnimationState: 'void' | 'fly-in' | 'fly-out' = 'void';
  defaultViewFadeOutAnimationState: 'void' | 'fade-out' = 'void';
  hoverViewFadeOutAnimationState: 'void' | 'fade-out' = 'void';
  startAnimationBtnState: 'enabled' | 'disabled' = 'enabled';
  startAnimationBtnIcon: 'play_arrow' | 'replay' = 'play_arrow';
  startAnimationBtnTooltipText: 'play' | 'replay' = 'play';
  startAnimationBtnTooltpPosition: 'before' | 'after' | 'above' | 'below' | 'left' | 'right' = 'above';

  constructor() {}

  ngOnInit() {}

  triggerAnimation() {
    this.initAnimation = true;
    this.backgroundLeftPanelWidth = 42;
    this.viewsContainerflyInOutAnimationState = 'fly-in';
    this.startAnimationBtnState = 'disabled';
    this.startAnimationBtnIcon = (!this.initAnimation) ? 'play_arrow' : 'replay';
  }

  resetAnimationState() {
    this.backgroundLeftPanelWidth = 0;
    this.viewsContainerflyInOutAnimationState = 'void';
    this.defaultViewFadeOutAnimationState = 'void';
    this.hoverViewFadeOutAnimationState = 'void';
    this.startAnimationBtnState = 'enabled';
    this.startAnimationBtnTooltipText = 'replay';
  }

  onViewsContainerflyInOutAnimationDone(evt) {
    if (evt.fromState === 'void' && evt.toState === 'fly-in') {
      setTimeout(() => {
        this.defaultViewFadeOutAnimationState = 'fade-out';
      }, 1500);
    } else if (evt.fromState === 'fly-in' && evt.toState === 'fly-out') {
      this.resetAnimationState();
    }
  }

  onDefaultViewFadeOutAnimationDone(evt) {
    if (evt.fromState === 'void' && evt.toState === 'fade-out') {
      setTimeout(() => {
        this.hoverViewFadeOutAnimationState = 'fade-out';
      }, 2000);
    }
  }

  onHoverViewFadeOutAnimationDone(evt) {
    if (evt.fromState === 'void' && evt.toState === 'fade-out') {
      setTimeout(() => {
        this.backgroundLeftPanelWidth = 0;
        this.viewsContainerflyInOutAnimationState = 'fly-out';
      }, 2000);
    }
  }
}
