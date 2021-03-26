import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureComponent } from './brochure.component';

describe('BrochureComponent', () => {
  let component: BrochureComponent;
  let fixture: ComponentFixture<BrochureComponent>;
  const routerSpy: any = jasmine.createSpy('router');
  const routeSpy: any = jasmine.createSpy('route');

  beforeEach(async () => {
   component = new BrochureComponent(
    routerSpy,
    routeSpy
   )
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
