import { StarWarsService } from '../services/starWars.services';

export class Starwars {
  public url: string = "";
  public id: string = "";

  public jsonToObject(input): Starwars {
    throw "not implemented";
  };
  public getAssociatedObjects(dataService: StarWarsService ) {
    throw "not implemented";
  };
}
