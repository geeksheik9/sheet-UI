import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmToolsComponent } from './gm-tools.component';

describe('GmToolsComponent', () => {
  let component: GmToolsComponent;
  let fixture: ComponentFixture<GmToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
