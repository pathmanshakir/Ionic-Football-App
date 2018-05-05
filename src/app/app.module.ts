import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClient } from '@angular/common/http';
import { FixturesPage } from '../pages/Fixtures/Fixtures';
import { LoginPage } from '../pages/login/login';
import { TeamPage } from '../pages/Teams/Teams';
import { StandingsPage } from '../pages/Standings/Standings';
import { PlayersPage } from '../pages/Players/Players';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { iTable,Leagues} from '../providers/data/data';
import { LeagueTablePage } from '../pages/league-table/league-table';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { NavController,NavParams } from 'ionic-angular';




@NgModule({
  declarations: [
    MyApp,
    FixturesPage,
    TeamPage,
    StandingsPage,
    TabsPage,
    LeagueTablePage,
    LoginPage,
    PlayersPage
  
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FixturesPage,
    TeamPage,
    StandingsPage,
    TabsPage,
    LeagueTablePage,
    LoginPage,
    PlayersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    HttpClient,
    LeagueTablePage,
    AuthProvider,

    
    
  
      
    
  ]
})
export class AppModule {}
