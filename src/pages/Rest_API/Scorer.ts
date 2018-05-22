import { iCoach2 } from './coaches/Coach';
export interface iScorer{
    id:number,
    Foto:string,
    Name : string,
    Team : string,
    coach: iCoach2;
    Position : string,
    Goals_Scored :string,
    Assists:string,
}

