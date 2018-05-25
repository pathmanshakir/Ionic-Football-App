import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import{Http}from '@angular/http';
import {Leagues}from '../../providers/data/data';
import {iTable}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueTablePage } from '../../pages/league-table/league-table';
import { FixturesPage } from '../../pages/Fixtures/Fixtures';
import { TabsPage } from '../../pages/tabs/tabs';





@Component({
  selector: 'page-home',
  templateUrl: 'Standings.html'
})
export class StandingsPage implements OnInit{
  public id="445";
  leaguesCompt:Leagues;
  leaguesTable:iTable;
  tabBarElement: any;
  constructor(public navCtrl: NavController, public ionicData:DataProvider,public tablePage:LeagueTablePage) {
    this.tabBarElement = document.querySelector('.tabbar');

      
    }
    ngOnInit() {
      
      this.ionicData.getType().subscribe(result => {this.leaguesCompt = result;  });
     
    
}
ionViewWillEnter() {
  this.tabBarElement.style.display = 'none';
}

ionViewWillLeave() {
  this.tabBarElement.style.display = 'flex';
}

openNavDetailsPage(variable) {

  this.ionicData.chosenLeague=variable;
  this.navCtrl.push(LeagueTablePage);

}
}
