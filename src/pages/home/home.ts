import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { DataService } from '../../app/services/data.services';
import { Personnage } from '../../app/models/personnage';
import { Vaisseau } from '../../app/models/vaisseau';
import { Planet } from '../../app/models/planet';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
public listPersonnages: Personnage[] = [];
public listVaisseau: Vaisseau[] = [];


public listplanet: Planet[] = [];
  constructor(public navCtrl: NavController, private dataService : DataService) {
    this.dataService.getListPlanet()
          .subscribe((result) => {
             this.listplanet = result;
             alert("coucou");
             console.log(result);
          }),
          (error) => {
            console.log(error);
           };
  }
  ngOnInit() {
    alert("hfjhrbfh");
  }

}
