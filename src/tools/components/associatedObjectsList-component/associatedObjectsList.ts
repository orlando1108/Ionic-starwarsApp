import { Component, Input, OnChanges } from '@angular/core';
import { Starwars } from '../../../app/models/starwars';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { StarWarsService } from '../../../app/services/starWars.services';

@Component({
  selector: 'associated-objects-list',
  templateUrl: 'associatedObjectsList.html',
  styleUrls: ['associatedObjectsList.css']
})

export class associatedObjectsComponent {
  @Input() item: Starwars;

 constructor(private dataService: StarWarsService, public ga: GoogleAnalytics) {

}

ngOnInit() {
    console.log("initialisation de la liste");
  //  this.games = this.gameService.getGames();
  }

}
