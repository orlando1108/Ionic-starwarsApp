import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { StarWarsService } from '../../app/services/starwars.services';
import { People } from '../../app/models/people';
import { Planet } from '../../app/models/planet';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
//public listPersonnages: People[] = [];


///public listplanet: Planet[] = [];
  constructor(public navCtrl: NavController) {  }
  ngOnInit() {
    alert("hfjhrbfh");
  }

}
