import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeagueTablePage } from './league-table';

@NgModule({
  declarations: [
    LeagueTablePage,
  ],
  imports: [
    IonicPageModule.forChild(LeagueTablePage),
  ],
})
export class LeagueTablePageModule {}
