import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'LivePage';
  tab2Root = 'VodPage';
  tab3Root = 'OtherPage';

  constructor() {

  }
}
