import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToolsTruncateComponent } from './ngx-tools-truncate.component';

describe('NgxToolsTruncateComponent', () => {
  let component: NgxToolsTruncateComponent;
  let fixture: ComponentFixture<NgxToolsTruncateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxToolsTruncateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToolsTruncateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
