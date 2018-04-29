import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import {Ifixture}from '../../providers/data/data';
import{OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'page-about',
  templateUrl: 'Fixtures.html'
})
export class FixturesPage implements OnInit  {
  
   param: NavParams;
  fixtures:Ifixture;
  myDate: String = new Date().toISOString();
  buttonName:String="Show Previous results"
  buttonColor:String="secondary"
  
  public ShowResults: boolean = false; //Whatever you want to initialise it as
  
  
   constructor(public ionicData:DataProvider) {
     
   }
   public onButtonClick() {
    
            this.ShowResults = !this.ShowResults;
            if(this.buttonColor==="secondary"){this.buttonColor="danger"}
            else{this.buttonColor="secondary"}
            if(this.buttonName==="Hide Previouse results"){this.buttonName="Show Previous results"}
            else{this.buttonName="Hide Previouse results"}

         
        }
 
   ngOnInit(){
     this.ionicData.getFixtures().subscribe(result => {this.fixtures = result; });
     console.log(this.ionicData.chosenLeague._links.fixtures.href);


   }
   ionViewDidLoad() {
     console.log('ionViewDidLoad Fixtures');
   }
 
   ionViewWillEnter(){
     this.ngOnInit();
   }
 
 }
