import { Component, EnvironmentInjector, inject,ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  @ViewChild(IonModal)
  modal!: IonModal;
  
  constructor(private router: Router) {
  }
  cancel(){
    this.modal.dismiss(null, 'cancel');
  }
  registrar(r: any) {
    this.modal.dismiss(null, 'cancel');
    this.router.navigate([r])
  }
}
