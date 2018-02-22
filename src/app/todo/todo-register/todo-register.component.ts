import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationFactory } from '@angular/animations';
import { todoRegisterAnimation } from './todo-register.animations';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss']
})
export class TodoRegisterComponent implements OnInit {
  animationPlayer: AnimationPlayer;
  initializeAnimation: boolean = false;
  playAnimationBtnState: 'enabled' | 'disabled' = 'enabled';
  playAnimationBtnIcon: 'play_arrow' | 'replay' = 'play_arrow';
  playAnimationBtnTooltipText: 'play' | 'replay' = 'play';
  playAnimationBtnTooltipPosition: 'before' | 'after' | 'above' | 'below' | 'left' | 'right' = 'above';

  @ViewChild('shotRef') shotRef: ElementRef;

  constructor(private animationBuilder: AnimationBuilder) {}

  ngOnInit() {
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

  private buildAnimation(): AnimationFactory {
    return this.animationBuilder.build(todoRegisterAnimation());
  }

  private buildAnimationPlayer(): AnimationPlayer {
    return this.buildAnimation().create(this.shotRef.nativeElement);
  }
}
