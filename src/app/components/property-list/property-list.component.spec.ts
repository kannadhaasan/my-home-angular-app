import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListComponent } from './property-list.component';

describe('PropertyListComponent', () => {
  let component: PropertyListComponent;
  let fixture: ComponentFixture<PropertyListComponent>;
  const myHomeServiceSpy: any = jasmine.createSpy('myHomeService');
  const routerSpy: any = jasmine.createSpy('router');
  const routeSpy: any = jasmine.createSpy('route');

  beforeEach(async () => {
    component = new PropertyListComponent(
      myHomeServiceSpy,
      routerSpy,
      routeSpy
    )
  });

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
