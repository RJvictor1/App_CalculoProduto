import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-r-produtos',
  templateUrl: './r-produtos.page.html',
  styleUrls: ['./r-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,FormsModule,RouterModule]
})
export class RProdutosPage implements OnInit {
  segment="materiais";
  constructor() { }

  ngOnInit() {
  }

}
