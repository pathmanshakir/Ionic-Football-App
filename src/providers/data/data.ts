import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  api ='http://api.football-data.org/v1/competitions/';
  key ='a5b312b8f5cf49e18c7cde881c2b0c1f';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }


    getType():Observable<Leagues>{
const headers = new HttpHeaders().set('X-Auth-Token',this.key)
 return this.http.get<Leagues>(this.api,{headers});
 
}
  
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



