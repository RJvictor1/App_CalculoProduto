import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent, FooterComponent]
})
export class ProdutosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
