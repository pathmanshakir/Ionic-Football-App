import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { FixturesPage } from '../Fixtures/Fixtures';
import { LeagueTablePage} from '../league-table/league-table';
import { NavController } from 'ionic-angular';
import { TeamPage } from '../Teams/Teams';
import { TopScorersPage } from '../../pages/Rest_API/TopScorers';



import { AuthProvider } from '../../providers/auth/auth';
import { StandingsPage } from '../Standings/Standings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StandingsPage;
  tab2Root = FixturesPage;
  tab3Root = TeamPage;
  tab4Root=TopScorersPage;

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
