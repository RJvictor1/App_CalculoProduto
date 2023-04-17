import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.page.html',
  styleUrls: ['./materiais.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent, FooterComponent]
})
export class MateriaisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
