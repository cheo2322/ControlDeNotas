import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Código',
      subHeader: '',
      message: 'Este código es provisto por el administrador de su institución. '
      +'Si usted no posee uno, contáctese directamente con dicho administrador.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
