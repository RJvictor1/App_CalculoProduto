import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VProdutoPage } from './v-produto.page';

describe('VProdutoPage', () => {
  let component: VProdutoPage;
  let fixture: ComponentFixture<VProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
