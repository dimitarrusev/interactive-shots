import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardV2Component } from './todo-login.component';

describe('TodoDashboardV2Component', () => {
  let component: TodoDashboardV2Component;
  let fixture: ComponentFixture<TodoDashboardV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDashboardV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDashboardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
