import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import{Http}from '@angular/http';
import {Leagues}from '../../providers/data/data';
import {iTable}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueTablePage } from '../../pages/league-table/league-table';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  public id="445";
  leaguesCompt:Leagues;
  leaguesTable:iTable;

  constructor(public navCtrl: NavController, public ionicData:DataProvider,public tablePage:LeagueTablePage) {

      
    }
    ngOnInit() {
      
      this.ionicData.getType().subscribe(result => {this.leaguesCompt = result;  });
     
    
}

openNavDetailsPage(variable) {
  this.ionicData.id=variable;
  this.navCtrl.push(LeagueTablePage,{variable:variable});

  

}
}
debugger;