import { StarWarsService } from '../services/starWars.services';
import { AlertController } from 'ionic-angular';

export class Starwars {
  public url: string = "";
  public id: string = "";
  public pathImage: string = "";

  public jsonToObject(input): Starwars {
    throw "not implemented";
  };
  public getAssociatedObjects(dataService: StarWarsService, alertCtrl:AlertController ) {
    throw "not implemented";
  };
}
