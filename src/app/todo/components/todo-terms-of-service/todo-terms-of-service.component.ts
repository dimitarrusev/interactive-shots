import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationFactory, AnimationMetadata } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { first } from 'rxjs/operators/first';

import { RouteService } from '../../../core';
import { playBtnShowAnimation, playBtnHideAnimation } from '../../shared';
import { todoTermsOfServiceShotAnimation } from './todo-terms-of-service.animations';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './todo-terms-of-service.component.html',
  styleUrls: ['./todo-terms-of-service.component.scss']
})
export class TodoTermsOfServiceComponent implements OnInit, OnDestroy {
  initialRouteIsInitializedSubscription: Subscription;
  routeAnimationStateSubscription: Subscription;
  shotAnimation: AnimationPlayer;
  playBtnShowAnimation: AnimationPlayer;
  playBtnHideAnimation: AnimationPlayer;
  playBtnState: 'enabled' | 'disabled' = 'enabled';
  playBtnIcon: 'play' | 'replay' = 'play';
  playBtnTooltipText: 'play' | 'replay' = 'play';
  playBtnTooltipPosition: 'before' | 'after' | 'above' | 'below' | 'left' | 'right' = 'above';

  @ViewChild('shotRef') shotRef: ElementRef;
  @ViewChild('playBtnRef', { read: ElementRef }) playBtnRef: ElementRef;

  constructor(
    private animationBuilder: AnimationBuilder,
    public routeService: RouteService
  ) {}

  ngOnInit() {
    // Build animations
    this.shotAnimation = this.buildAnimationPlayer(this.shotRef, todoTermsOfServiceShotAnimation());
    this.playBtnShowAnimation = this.buildAnimationPlayer(this.playBtnRef, playBtnShowAnimation());
    this.playBtnHideAnimation = this.buildAnimationPlayer(this.playBtnRef, playBtnHideAnimation());

    // Register callbacks
    this.shotAnimation.onStart(() => this.playBtnState = 'disabled');
    this.shotAnimation.onDone(() => {
      this.playBtnState = 'enabled';
      this.playBtnIcon = 'replay';
      this.playBtnTooltipText = 'replay';
    });

    // Communicate with parent component via routeCommnivationService
    this.routeAnimationStateSubscription = this.routeService.routeAnimationState$.subscribe(routeAnimationState => {
      if (routeAnimationState === 'done') {
        // Animate button
        this.playBtnShowAnimation.play();

        // Set initial route state
        if (!this.routeService.getInitialRouteState()) {
          this.routeService.setInitialRouteState('rendered');
        }
      }
    });
  }

  ngOnDestroy() {
    this.routeAnimationStateSubscription.unsubscribe();
    this.routeService.setRouteAnimationState(null);
  }

  private buildAnimationPlayer(
    elementRef: ElementRef,
    animation: AnimationMetadata | AnimationMetadata[]
  ): AnimationPlayer {
    return this.animationBuilder.build(animation).create(elementRef.nativeElement);
  }

  toggleShotSize(evt) {
    // Toggle size only if the click is inside the shot,
    // but outside the play/replay button.
    if (!this.playBtnRef.nativeElement.contains(evt.target)) {
      this.routeService.toggleShotSize();
    }
  }

  canDeactivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      switch (this.playBtnState) {
        // 'enabled' button state indicates that the shot animation is done.
        // Therefore, we animate the button and resolve.
        case 'enabled':
          this.playBtnHideAnimation.play();
          this.playBtnHideAnimation.onDone(() => resolve(true));
          break;

        // 'disabled' button state indicates that the shot animation is running.
        // Therefore we resolve immediately.
        case 'disabled':
          resolve(true);
          break;
      };
    });
  }
}
