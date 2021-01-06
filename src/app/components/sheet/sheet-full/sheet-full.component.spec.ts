import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetFullComponent } from './sheet-full.component';

describe('SheetFullComponent', () => {
  let component: SheetFullComponent;
  let fixture: ComponentFixture<SheetFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
