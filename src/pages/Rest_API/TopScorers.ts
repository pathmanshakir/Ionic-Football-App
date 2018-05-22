import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { DataProvider, iTopscorer} from '../../providers/data/data';
import {iPlayers}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import * as moment from 'moment';
import { Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { iScorer} from '../../pages/Rest_API/Scorer';
import { CoachesPage } from '../../pages/Rest_API/Coaches/Coaches';
import { iCoach2 } from './coaches/Coach';


/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-TopScorer',
  templateUrl: 'TopScorers.html',
})
export class TopScorersPage implements OnInit {

   TopScorer:iTopscorer[];
   public addPlayer: boolean = false;
   public addCoach:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ionicData:DataProvider) {
  }

  public  onButtonClick() {
    
    this.addPlayer = !this.addPlayer;
  }
  public  onButtonClick2() {
    
    this.addCoach = !this.addCoach;
  }


  public  Save( Name:string,Team :String,Position :string,Goals_Scored:string,Assists:string,Foto:String,fullName:String,nationality:string,foto:string):void {
    const coach:iCoach2={foto,fullName,nationality} as iCoach2;
    const newScorer:iScorer={Foto,Name,Team,coach,Position,Goals_Scored,Assists} as iScorer;
    this.ionicData.postTopScorers(newScorer).subscribe(scorer =>this.TopScorer.push(scorer))
    this.addPlayer = !this.addPlayer;
  }

 
  ShowCoach(scorerID){
    this.ionicData.MyRestApi2='http://localhost:5000/api/v1/Topscorers/'+scorerID+'/coach';
    this.navCtrl.push(CoachesPage);
    
  }

  ngOnInit() {
    
    this.ionicData.getTopScorers().subscribe(result => {this.TopScorer = result;  });
   
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopScorerpage');
   // console.log(this.TopScorer.name);

  }

}
export interface iScorer {
  id: number;
  foto: string;
  name: string;
  team: string;
  position: string;
  goals_Scored: number;
  assists: number;
}

