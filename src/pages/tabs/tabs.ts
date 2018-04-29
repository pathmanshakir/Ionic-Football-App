import { Component } from '@angular/core';

import { FixturesPage } from '../Fixtures/Fixtures';
import { ContactPage } from '../contact/contact';
import { StandingsPage } from '../Standings/Standings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StandingsPage;
  tab2Root = FixturesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
