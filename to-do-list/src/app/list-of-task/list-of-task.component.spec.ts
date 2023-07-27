import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTaskComponent } from './list-of-task.component';

describe('ListOfTaskComponent', () => {
  let component: ListOfTaskComponent;
  let fixture: ComponentFixture<ListOfTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfTaskComponent]
    });
    fixture = TestBed.createComponent(ListOfTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
