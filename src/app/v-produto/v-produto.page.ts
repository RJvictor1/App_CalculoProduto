import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-v-produto',
  templateUrl: './v-produto.page.html',
  styleUrls: ['./v-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class VProdutoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
