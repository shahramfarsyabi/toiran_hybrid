import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
	selector : 'page-tab-main',
	templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openPage(page){
  	
  	switch(page){
  		case "LoginPage":
			this.navCtrl.push(LoginPage);
  			break;
  	}
  }
}
