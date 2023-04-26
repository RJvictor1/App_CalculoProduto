import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RMateriaisPage } from './r-materiais.page';

describe('RMateriaisPage', () => {
  let component: RMateriaisPage;
  let fixture: ComponentFixture<RMateriaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RMateriaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
