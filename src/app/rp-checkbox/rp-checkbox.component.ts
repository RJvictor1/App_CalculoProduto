import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rp-checkbox',
  templateUrl: './rp-checkbox.component.html',
  styleUrls: ['./rp-checkbox.component.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,CommonModule]
})
export class RpCheckboxComponent  implements OnInit {
  segment="materiais";
  constructor(private modalCtrl: ModalController) { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {}

}
