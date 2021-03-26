import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  const myHomeServiceSpy: any = jasmine.createSpy('myHomeService');
  const routerSpy: any = jasmine.createSpy('router');
  const routeSpy: any = jasmine.createSpy('route');

  beforeEach(async () => {
    component = new GalleryComponent(
      myHomeServiceSpy,
      routerSpy,
      routeSpy
    )   
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
