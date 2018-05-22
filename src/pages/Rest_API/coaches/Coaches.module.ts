import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachesPage } from './Coaches';

@NgModule({
  declarations: [
    CoachesPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachesPage),
  ],
})
export class CoachsPageModule {}
