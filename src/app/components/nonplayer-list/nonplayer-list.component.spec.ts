import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonplayerListComponent } from './nonplayer-list.component';

describe('NonplayerListComponent', () => {
  let component: NonplayerListComponent;
  let fixture: ComponentFixture<NonplayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonplayerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonplayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
