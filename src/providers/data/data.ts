import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';
import { StandingsPage } from '../../pages/Standings/Standings';
import { TopScorersPage } from '../../pages/Rest_API/TopScorers';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class DataProvider {
    defaultLeague:Leagues;
    leagueId:StandingsPage;
   chosenLeague ;
   chosenTeam;
  api_Competitions ='http://api.football-data.org/v1/competitions/';
  MyRestApi="http://localhost:5000/api/v1/Topscorers";
  key ='a5b312b8f5cf49e18c7cde881c2b0c1f';
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
    
}

    getType():Observable<Leagues>{
const headers = new HttpHeaders().set('X-Auth-Token',this.key)
 return this.http.get<Leagues>(this.api_Competitions,{headers});
 }
    getLeagueTable():Observable<iTable>{
const headers = new HttpHeaders().set('X-Auth-Token',this.key)
console.log(this.chosenLeague._links.leagueTable.href);
 return this.http.get<iTable>(this.chosenLeague._links.leagueTable.href,{headers});}
 getFixtures():Observable<Ifixture>{
    const headers = new HttpHeaders().set('X-Auth-Token',this.key)
    console.log(this.chosenLeague._links.fixtures.href);
     return this.http.get<Ifixture>(this.chosenLeague._links.fixtures.href,{headers});}

     getTeams():Observable<iTeams>{
        const headers = new HttpHeaders().set('X-Auth-Token',this.key)
        console.log(this.chosenLeague._links.fixtures.href);
         return this.http.get<iTeams>(this.chosenLeague._links.teams.href,{headers});}

         getPlayers():Observable<iPlayers>{
            const headers = new HttpHeaders().set('X-Auth-Token',this.key)
            console.log(this.chosenLeague._links.fixtures.href);
             return this.http.get<iPlayers>(this.chosenTeam._links.players.href,{headers});}

             getTopScorers():Observable<iTopscorer[]>{

                 return this.http.get<iTopscorer[]>(this.MyRestApi)
                }
                postTopScorers(){
                    this.http.post(this.MyRestApi, 
                    {Foto:"https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p101668.png",
                    Name : "Jamie Vardy",
                    Team : "Leicester",
                    Position : "Striker",
                    Goals_Scored :20,
                    Assists:1}
                ).subscribe(res => console.log());
                   // return this.http.post<iScorer>(this.MyRestApi)
                   }
    
    }




//All cometities
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

    export interface League {
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
        leaguearr: League[];
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
        
        //Fixtures

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
    
        export interface Self2 {
            href: string;
        }
    
        export interface Competition2 {
            href: string;
        }
    
        export interface HomeTeam {
            href: string;
        }
    
        export interface AwayTeam {
            href: string;
        }
    
        export interface Links2 {
            self: Self2;
            competition: Competition2;
            homeTeam: HomeTeam;
            awayTeam: AwayTeam;
        }
    
        export interface HalfTime {
            goalsHomeTeam: number;
            goalsAwayTeam: number;
        }
    
        export interface Result {
            goalsHomeTeam: number;
            goalsAwayTeam: number;
            halfTime: HalfTime;
        }
    
        export interface Fixture {
            _links: Links2;
            date: Date;
            status: string;
            matchday: number;
            homeTeamName: string;
            awayTeamName: string;
            result: Result;
            odds?: any;
        }
    
        export interface Ifixture {
            _links: Links;
            count: number;
            fixtures: Fixture[];
        }
    
        //Teams

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
    
        export interface Self2 {
            href: string;
        }
    
        export interface Fixtures {
            href: string;
        }
    
        export interface Players {
            href: string;
        }
    
        export interface Links2 {
            self: Self2;
            fixtures: Fixtures;
            players: Players;
        }
    
        export interface Team {
            _links: Links2;
            name: string;
            code: string;
            shortName: string;
            squadMarketValue?: any;
            crestUrl: string;
        }
    
        export interface iTeams {
            _links: Links;
            count: number;
            teams: Team[];
        }
        
      // Players

      export interface Self {
        href: string;
    }

    export interface Team {
        href: string;
    }

    export interface Links {
        self: Self;
        team: Team;
    }

    export interface Player {
        name: string;
        position: string;
        jerseyNumber?: number;
        dateOfBirth: string;
        nationality: string;
        contractUntil: string;
        marketValue?: any;
    }

    export interface iPlayers {
        _links: Links;
        count: number;
        players: Player[];
    }

    //My Rest API interface

    export interface iTopscorer {
        id: number;
        foto: string;
        name: string;
        team: string;
        position: string;
        goals_Scored: number;
        assists: number;
    }
