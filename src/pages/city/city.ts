import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-city',
  templateUrl: 'city.html'
})

export class CityPage {
	selectedItem: any;

	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams) {

	
	}

	goBack(){
		this.navCtrl.pop();
	}
}
