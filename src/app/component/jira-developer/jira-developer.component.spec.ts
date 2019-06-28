import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraDeveloperComponent } from './jira-developer.component';

describe('JiraDeveloperComponent', () => {
  let component: JiraDeveloperComponent;
  let fixture: ComponentFixture<JiraDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
