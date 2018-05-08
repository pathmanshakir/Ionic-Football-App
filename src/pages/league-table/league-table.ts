import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import{Http}from '@angular/http';
import {Leagues}from '../../providers/data/data';
import {iTable}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FixturesPage } from '../../pages/Fixtures/Fixtures';
import { TabsPage } from '../../pages/tabs/tabs';
import{StandingsPage}from '../../pages/Standings/Standings';
import { Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the LeagueTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-league-table',
  templateUrl: 'league-table.html',
  
})
export class LeagueTablePage implements OnInit  {
 
 leaguesTable:iTable;
 
 
 
 
  constructor(public nav:NavController, public ionicData:DataProvider) {
     
  }
 
  ngOnInit(){
    this.ionicData.getLeagueTable().subscribe(result => {this.leaguesTable = result; });
   console.log("league table clicked");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTablePage');
  }
 back(){
 this.nav.push(StandingsPage);
 
}
}
