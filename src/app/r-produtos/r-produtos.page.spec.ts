import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RProdutosPage } from './r-produtos.page';

describe('RProdutosPage', () => {
  let component: RProdutosPage;
  let fixture: ComponentFixture<RProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
