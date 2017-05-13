import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HotelsPage } from '../hotels/hotels';
import { CityPage } from '../city/city';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPage(page){
  	
  	switch(page){
  		case "HotelsPage":
			this.navCtrl.push(HotelsPage);
  			break;
  		case "CityPage":
			this.navCtrl.push(CityPage);
  			break;  			
  	}

  }

}
