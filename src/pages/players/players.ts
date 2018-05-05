import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import {iPlayers}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import * as moment from 'moment';
import { Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage implements OnInit {

   TeamPlayers:iPlayers;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ionicData:DataProvider) {
  }

  ngOnInit() {
    
    this.ionicData.getPlayers().subscribe(result => {this.TeamPlayers = result;  });
   
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersPage');
  }

}
