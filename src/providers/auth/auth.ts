import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

   public user:Observable<any>;


   constructor(public http : Http){
      firebase.auth().onAuthStateChanged((user) =>
      {
        if (user)  {
          // User is signed in.
          console.log('User is signed in');
        }
        else
        {
          // No user is signed in.
          console.log('User is NOT signed in');
        }
      });
   }




   /**
    * Use Firebase Web API signInWithEmailAndPassword method
    * to authenticate user login attempt
    *
    * @method loginWithEmailAndPassword
    * @param email    {string}      User e-mail address (gmail)
    * @param password {string}      Gmail address password
    * @return {Promise}
    */
   loginWithEmailAndPassword(email  : string,password  : string) : Promise<any> {
      return new Promise((resolve, reject) => {firebase.auth().signInWithEmailAndPassword(email, password) .then((val : any) =>{resolve(val);})
         .catch((error : any) =>{reject(error);});
      });
   }

   /**
    * Log out with Firebase Web API signOut method
    *
    * @method logOut
    * @return {Promise}
    */
   logOut() : Promise<any>
   {
      return new Promise((resolve, reject) =>
      {firebase.auth().signOut().then(() =>{resolve(true);}).catch((error : any) =>{reject(error);});
      });
   }
   register(email  : string,password  : string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email,password);
}

}
