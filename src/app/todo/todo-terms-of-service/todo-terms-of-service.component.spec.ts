import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTermsOfServiceComponent } from './todo-terms-of-service.component';

describe('TodoTermsOfServiceComponent', () => {
  let component: TodoTermsOfServiceComponent;
  let fixture: ComponentFixture<TodoTermsOfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTermsOfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTermsOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
