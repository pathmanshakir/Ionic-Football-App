import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

 // user = {} as User;
  Email;
  Pass;
  constructor(private afAuth: AuthProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(Email,Pass) {
    try {
      const result = await this.afAuth.register(Email, Pass);
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }
}
