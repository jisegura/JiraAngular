import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraScrummasterComponent } from './jira-scrummaster.component';

describe('JiraScrummasterComponent', () => {
  let component: JiraScrummasterComponent;
  let fixture: ComponentFixture<JiraScrummasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraScrummasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraScrummasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
