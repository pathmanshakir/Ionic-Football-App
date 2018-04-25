import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import {iTable}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the LeagueTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table',
  templateUrl: 'league-table.html',
  
})
export class LeagueTablePage implements OnInit  {
 
  param: NavParams;
 Home:HomePage;
 leaguesTable:iTable;
 
  constructor(public ionicData:DataProvider) {
    
  }

  ngOnInit(){
    this.ionicData.getLeagueTable().subscribe(result => {this.leaguesTable = result; });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTablePage');
  }

}
