import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { DataService } from '../../app/services/data.services';
import { Personnage } from '../../app/models/personnage';
import { Vaisseau } from '../../app/models/vaisseau';
import { Planet } from '../../app/models/planet';
import { Film } from '../../app/models/film';
import { Vehicule } from '../../app/models/vehicule';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
public listPersonnages: Personnage[] = [];
public listVaisseau: Vaisseau[] = [];
public listFilm: Film[] = [];
public listPlanet: Planet[] = [];
public listVehicules: Vehicule[] = [];

public listplanet: Planet[] = [];
  constructor(public navCtrl: NavController, private dataService : DataService) {
    this.dataService.getListVehicule()
          .subscribe((result) => {
             this.listVehicules = result;
             alert("coucou");
             console.log(result);
          }),
          (error) => {
            console.log(error);
           };
  }
  ngOnInit() {
  }

}
