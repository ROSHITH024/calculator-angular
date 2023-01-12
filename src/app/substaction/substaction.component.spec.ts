import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstactionComponent } from './substaction.component';

describe('SubstactionComponent', () => {
  let component: SubstactionComponent;
  let fixture: ComponentFixture<SubstactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
