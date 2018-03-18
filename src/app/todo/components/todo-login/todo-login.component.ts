import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationFactory } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';

import { RouteCommunicationService } from '../../../core';
import { todoLoginAnimation } from './todo-login.animations';

@Component({
  selector: 'app-todo-login',
  templateUrl: './todo-login.component.html',
  styleUrls: ['./todo-login.component.scss']
})
export class TodoLoginComponent implements OnInit, OnDestroy {
  routeAnimationState: Subscription;
  animationPlayer: AnimationPlayer;
  initializeAnimation: boolean = false;
  revealPlayAnimationBtn: boolean = false;
  playAnimationBtnState: 'enabled' | 'disabled' = 'enabled';
  playAnimationBtnIcon: 'play_arrow' | 'replay' = 'play_arrow';
  playAnimationBtnTooltipText: 'play' | 'replay' = 'play';
  playAnimationBtnTooltipPosition: 'before' | 'after' | 'above' | 'below' | 'left' | 'right' = 'above';

  @ViewChild('shotRef') shotRef: ElementRef;

  constructor(
    private routeCommunicationService: RouteCommunicationService,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {
    this.routeAnimationState = this.routeCommunicationService.routeAnimationState$.subscribe(routeAnimationState => {
      (routeAnimationState === 'done')
        ? this.revealPlayAnimationBtn = true
        : this.revealPlayAnimationBtn = false
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
    this.routeAnimationState.unsubscribe();
    this.routeCommunicationService.setRouteAnimationState(undefined);
  }

  private buildAnimation(): AnimationFactory {
    return this.animationBuilder.build(todoLoginAnimation());
  }

  private buildAnimationPlayer(): AnimationPlayer {
    return this.buildAnimation().create(this.shotRef.nativeElement);
  }
}
