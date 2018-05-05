import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { FixturesPage } from '../Fixtures/Fixtures';
import { LeagueTablePage} from '../league-table/league-table';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';



import { AuthProvider } from '../../providers/auth/auth';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LeagueTablePage;
  tab2Root = FixturesPage;
  tab3Root = ContactPage;

  constructor(private _NAV      : NavController,
    private _AUTH     : AuthProvider) {

  }
/**
    * Log out from Firebase/set the rootPage value to
    * the LoginPage component
    * @method logOut
    * @return {none}
    */
    logOut() : void
    {
       this._AUTH.logOut()
       .then((data : any) =>
       {
          this._NAV.setRoot(LoginPage);
       })
       .catch((error : any) =>
       {
          console.dir(error);
       });
    }
 
 
 }
