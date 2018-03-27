import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoResetPasswordComponent } from './todo-reset-password.component';

describe('TodoResetPasswordComponent', () => {
  let component: TodoResetPasswordComponent;
  let fixture: ComponentFixture<TodoResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
