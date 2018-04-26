import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';
import { HomePage } from '../../pages/home/home';
import {Leagues}from '../../providers/data/data';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



//Dit werkt wel
//var api_LeagueTable ='http://api.football-data.org/v1/competitions/445/leagueTable';
@Injectable()
export class DataProvider {
    leagueId:HomePage;
    id;
   api_LeagueTable =('http://api.football-data.org/v1/competitions/'+this.id+'/leagueTable');
   league2 :Leagues;
//linkToLeagueTable= this.league2.league[this.id]._links.leagueTable.href;

  api_Competitions ='http://api.football-data.org/v1/competitions/';
  key ='a5b312b8f5cf49e18c7cde881c2b0c1f';
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
    console.log(this.id);}

    getType():Observable<Leagues>{
const headers = new HttpHeaders().set('X-Auth-Token',this.key)
 return this.http.get<Leagues>(this.api_Competitions,{headers});
 }
   // getLeagueTable():Observable<Leagues>{
//const headers = new HttpHeaders().set('X-Auth-Token',this.key)
// return this.http.get<Leagues>(this.linkToLeagueTable,{headers});}
}



    export interface Self {
        href: string;
    }

    export interface Teams {
        href: string;
    }

    export interface Fixtures {
        href: string;
    }

    export interface LeagueTable {
        href: string;
    }

    export interface Links {
        self: Self;
        teams: Teams;
        fixtures: Fixtures;
        leagueTable: LeagueTable;
    }

    export interface AllLeagues {
        _links: Links;
        id: number;
        caption: string;
        league: string;
        year: string;
        currentMatchday: number;
        numberOfMatchdays: number;
        numberOfTeams: number;
        numberOfGames: number;
        lastUpdated: Date;
    }
    export interface Leagues {
        _links: Links;
        count: number;
        league: AllLeagues[];
    }


    // LeagueTable Interfaces
   
        
            export interface Self {
                href: string;
            }
        
            export interface Competition {
                href: string;
            }
        
            export interface Links {
                self: Self;
                competition: Competition;
            }
        
            export interface Team {
                href: string;
            }
        
            export interface Links2 {
                team: Team;
            }
        
            export interface Home {
                goals: number;
                goalsAgainst: number;
                wins: number;
                draws: number;
                losses: number;
            }
        
            export interface Away {
                goals: number;
                goalsAgainst: number;
                wins: number;
                draws: number;
                losses: number;
            }
        
            export interface Standing {
                _links: Links2;
                position: number;
                teamName: string;
                crestURI: string;
                playedGames: number;
                points: number;
                goals: number;
                goalsAgainst: number;
                goalDifference: number;
                wins: number;
                draws: number;
                losses: number;
                home: Home;
                away: Away;
            }
        
            export interface iTable {
                _links: Links;
                leagueCaption: string;
                matchday: number;
                standing: Standing[];
            }
        
        
        
        
