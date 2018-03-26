import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationFactory, AnimationMetadata } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { first } from 'rxjs/operators';

import { RouteCommunicationService } from '../../../core';
import { todoRegisterShotAnimation, todoRegisterBtnAnimation } from './todo-register.animations';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss']
})
export class TodoRegisterComponent implements OnInit, OnDestroy {
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
    public routeCommunicationService: RouteCommunicationService,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {
    this.routeAnimationStateSubscription = this.routeCommunicationService.routeAnimationState$.subscribe(routeAnimationState => {
      if (routeAnimationState === 'done') {
        // Animate button
        this.playBtnShowAnimation.play();

        // Set initial route state
        if (!this.routeCommunicationService.getInitialRouteIsInitialized()) {
          this.routeCommunicationService.setInitialRouteIsInitialized(true);
        }
      }
    });

    // Create shot animation player
    this.shotAnimation = this.buildAnimationPlayer(this.shotRef, todoRegisterShotAnimation());

    this.shotAnimation.onStart(() => {
      this.playBtnState = 'disabled';
    });

    this.shotAnimation.onDone(() => {
      this.playBtnState = 'enabled';
      this.playBtnIcon = 'replay';
      this.playBtnTooltipText = 'replay';
    });

    // Create btn animation player
    this.playBtnShowAnimation = this.buildAnimationPlayer(this.playBtnRef, todoRegisterBtnAnimation('show'));
    this.playBtnHideAnimation = this.buildAnimationPlayer(this.playBtnRef, todoRegisterBtnAnimation('hide'));
  }

  ngOnDestroy() {
    this.routeAnimationStateSubscription.unsubscribe();
    this.routeCommunicationService.setRouteAnimationState(null);
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
      this.routeCommunicationService.shotSize$
        .pipe(first())
        .subscribe(shotSize => {
          (shotSize === 'oneX')
            ? this.routeCommunicationService.setShotSize('twoX')
            : this.routeCommunicationService.setShotSize('oneX');
        })
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
