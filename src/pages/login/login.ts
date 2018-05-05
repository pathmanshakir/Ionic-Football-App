import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { StandingsPage } from '../../pages/Standings/Standings';

import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Http } from '@angular/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
     /**
      * Create reference for FormGroup object
      */
     public form                  : FormGroup;
  
  
     constructor(public navCtrl    : NavController,
                 private _FB       : FormBuilder,
                 private _AUTH     : AuthProvider)
     {
        // Define FormGroup object using Angular's FormBuilder
        this.form = this._FB.group({
           'email'        : ['', Validators.required],
           'password'     : ['', Validators.required]
        });
     }
  
  
  
  
     /**
      * Log in using the loginWithEmailAndPassword method
      * from the AuthProvider service (supplying the email
      * and password FormControls from the template via the
      * FormBuilder object
      * @method logIn
      * @return {none}
      */
     logIn() : void
     {
        let email      : any        = this.form.controls['email'].value,
            password   : any        = this.form.controls['password'].value;
  
        this._AUTH.loginWithEmailAndPassword(email, password)
        .then((auth : any) =>
        {
           this.navCtrl.setRoot(StandingsPage);
        })
        .catch((error : any) =>
        {
           console.log(error.message);
        });
     }
     register() {
      this.navCtrl.push('RegisterPage');
    }
  
  }