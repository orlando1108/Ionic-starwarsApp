import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { StarWarsService } from '../../app/services/starwars.services';
import { People } from '../../app/models/people';
import { Spaceship } from '../../app/models/spaceship';
import { Planet } from '../../app/models/planet';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
public listPersonnages: People[] = [];
public listVaisseau: Spaceship[] = [];


public listplanet: Planet[] = [];
  constructor(public navCtrl: NavController, private dataService : StarWarsService) {
    this.dataService.getListVaisseau()
          .subscribe((result) => {
             this.listVaisseau = result;
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
