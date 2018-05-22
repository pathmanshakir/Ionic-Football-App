import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { IonicPage} from 'ionic-angular';
import { DataProvider} from '../../..//providers/data/data';
import { iCoach2 } from '../coaches/Coach';
import{OnInit} from '@angular/core';
import * as moment from 'moment';
import { Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';


/**
 * Generated class for the CoachsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coachs',
  templateUrl: 'Coaches.html',
})
export class CoachesPage implements OnInit {
 
  coaches1:iCoach2;


  constructor(public navCtrl: NavController, public navParams: NavParams,public ionicData:DataProvider) {
  }
  
  ngOnInit(): void {
   
    this.ionicData.getTopscorerCoaches().subscribe(result => {this.coaches1 = result;  });
    
    console.log("tes test ");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachsPage');
  }

}
