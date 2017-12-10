import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { DataService } from '../../app/services/data.services';
import { People } from '../../app/models/people';
import { Starship } from '../../app/models/starship';
import { Planet } from '../../app/models/planet';
import { Specie } from '../../app/models/specie';
import { Film } from '../../app/models/film';
import { Vehicle } from '../../app/models/vehicle';
import { Starwars } from '../../app/models/starwars';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
public listPersonnages: People[] = [];
public listVaisseau: Starship[] = [];
public listSpecie: Specie[] = [];
public listFilm: Film[] = [];
public listPlanet: Planet[] = [];
public listVehicles: Vehicle[] = [];
public specie = new Specie();

public listplanet: Planet[] = [];
  constructor(public navCtrl: NavController, private dataService : DataService) {
    this.dataService.getListObject(new Vehicle())
          .subscribe((result) => {
             this.listSpecie = result;
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
