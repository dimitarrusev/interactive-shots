import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationFactory } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { first } from 'rxjs/operators/first';

import { RouteCommunicationService } from '../../../core';
import { todoResetPasswordAnimation } from './todo-reset-password.animations';

@Component({
  selector: 'app-todo-reset-password',
  templateUrl: './todo-reset-password.component.html',
  styleUrls: ['./todo-reset-password.component.scss']
})
export class TodoResetPasswordComponent implements OnInit, OnDestroy {
  initialRouteIsInitializedSubscription: Subscription;
  routeAnimationStateSubscription: Subscription;
  animationPlayer: AnimationPlayer;
  initializeAnimation: boolean = false;
  revealPlayAnimationBtn: boolean = false;
  playAnimationBtnState: 'enabled' | 'disabled' = 'enabled';
  playAnimationBtnIcon: 'play' | 'replay' = 'play';
  playAnimationBtnTooltipText: 'play' | 'replay' = 'play';
  playAnimationBtnTooltipPosition: 'before' | 'after' | 'above' | 'below' | 'left' | 'right' = 'above';

  @ViewChild('shotRef') shotRef: ElementRef;
  @ViewChild('playAnimationBtnRef', { read: ElementRef }) playAnimationBtnRef: ElementRef;

  constructor(
    public routeCommunicationService: RouteCommunicationService,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {
    this.routeAnimationStateSubscription = this.routeCommunicationService.routeAnimationState$.subscribe(routeAnimationState => {
      if (routeAnimationState === 'done') {
        this.revealPlayAnimationBtn = true;
      }
    });

    this.animationPlayer = this.buildAnimationPlayer();

    this.animationPlayer.onStart(() => {
      this.initializeAnimation = true;
      this.playAnimationBtnState = 'disabled';
    });

    this.animationPlayer.onDone(() => {
      this.playAnimationBtnState = 'enabled';
      this.playAnimationBtnIcon = 'replay';
      this.playAnimationBtnTooltipText = 'replay';
    });
  }

  ngOnDestroy() {
    this.routeAnimationStateSubscription.unsubscribe();
    this.routeCommunicationService.setRouteAnimationState(null);
  }

  private buildAnimation(): AnimationFactory {
    return this.animationBuilder.build(todoResetPasswordAnimation());
  }

  private buildAnimationPlayer(): AnimationPlayer {
    return this.buildAnimation().create(this.shotRef.nativeElement);
  }

  toggleShotSize(evt) {
    // Toggle size only if the click is inside the shot,
    // but outside the play/replay button.
    if (!this.playAnimationBtnRef.nativeElement.contains(evt.target)) {
      this.routeCommunicationService.shotSize$
        .pipe(first())
        .subscribe(shotSize => {
          (shotSize === 'oneX')
            ? this.routeCommunicationService.setShotSize('twoX')
            : this.routeCommunicationService.setShotSize('oneX');
        })
    }
  }
}
