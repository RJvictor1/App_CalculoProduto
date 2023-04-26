import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-v-material',
  templateUrl: './v-material.page.html',
  styleUrls: ['./v-material.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VMaterialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
