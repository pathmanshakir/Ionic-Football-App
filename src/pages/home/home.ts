import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import{Http}from '@angular/http';
import {Leagues}from '../../providers/data/data';
import {iTable}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  
  leaguesCompt:Leagues;
  leaguesTable:iTable;
  search:number= 445;
  constructor(public navCtrl: NavController, public ionicData:DataProvider) {

      
    }
    ngOnInit() {
      this.ionicData.getType().subscribe(result => {this.leaguesCompt = result;  debugger});
      this.ionicData.getLeagueTable().subscribe(result => {this.leaguesTable = result;  debugger});
    
}
 f() {
  var a = "445";
      return a ;
  }


}
debugger;