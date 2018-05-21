import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { AuthService } from "../../services/auth-service";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  email: any;
  password: any;
  confirmPassword: any;

  constructor(public nav: NavController, public authService: AuthService, public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
  }

  // register and go to home page
  register() {
    if (!this.email || !this.password) {
      let alert = this.alertCtrl.create({
        message: 'Por favor introduce un correo y contraseña',
        buttons: ['OK']
      });
      return alert.present();
    }

    if (this.password != this.confirmPassword) {
      let alert = this.alertCtrl.create({
        message: 'Las contraseñas no concuerdan.',
        buttons: ['OK']
      });
      alert.present();
    } else {
      let loading = this.loadingCtrl.create({
        content: 'Por favor espera...'
      });
      loading.present();

      this.authService.register(this.email, this.password).subscribe(authData => {
        loading.dismiss();
        this.nav.setRoot(HomePage);
      }, error => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: ['OK']
        });
        alert.present();
      });
    }
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
