import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClient } from '@angular/common/http';
import { FixturesPage } from '../pages/Fixtures/Fixtures';
import { ContactPage } from '../pages/contact/contact';
import { StandingsPage } from '../pages/Standings/Standings';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { iTable,Leagues} from '../providers/data/data';
import { LeagueTablePage } from '../pages/league-table/league-table';




@NgModule({
  declarations: [
    MyApp,
    FixturesPage,
    ContactPage,
    StandingsPage,
    TabsPage,
    LeagueTablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FixturesPage,
    ContactPage,
    StandingsPage,
    TabsPage,
    LeagueTablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    HttpClient,
    LeagueTablePage
  
      
    
  ]
})
export class AppModule {}
