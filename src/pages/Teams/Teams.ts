import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import {iTeams}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import * as moment from 'moment';
import { Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { PlayersPage } from '../../pages/Players/Players';

@Component({
  selector: 'page-Teams',
  templateUrl: 'Teams.html'
})
export class TeamPage implements OnInit {

  LeagueTeams:iTeams;
  constructor(public navCtrl: NavController,public ionicData:DataProvider) {

  }
  ngOnInit(){     
    this.ionicData.getTeams().subscribe(result => {this.LeagueTeams = result; });
    console.log(this.ionicData.chosenLeague._links.teams.href);
    }



  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Teams');
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }
  ShowPlayers(selectedTeam){
    this.ionicData.chosenTeam=selectedTeam;
    console.log("tested")
    this.navCtrl.push(PlayersPage);
  }
}
