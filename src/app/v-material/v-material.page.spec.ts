import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VMaterialPage } from './v-material.page';

describe('VMaterialPage', () => {
  let component: VMaterialPage;
  let fixture: ComponentFixture<VMaterialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
