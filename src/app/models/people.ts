import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';

import { Film } from '../models/film';

export class People extends Starwars{
    public name : string = "";
    public gender : string = "";
    public birth_year: string = "";
    public eye_color: string = "";
    public hair_color: string = "";
    public urlFilms: string[] = [];
    public homeworld: string = "";
    public height: string = "";
    public mass: string = "";
    public skin_color: string = "";
    public associetedFilms: Film[]=[];

    constructor()
    {
        super();
    }
    public jsonToObject(input) {
      let people = new People();
      let arrayUrl = input.url.split("/");
      people.id = arrayUrl[arrayUrl.length - 2]
      people.name = input.name;
      people.birth_year = input.birth_year;
      people.eye_color = input.eye_color;
      people.gender = input.gender;
      people.hair_color = input.hair_color;
      people.url = input.url;
      people.urlFilms = input.films;
      people.homeworld = input.homeworld;
      people.height = input.height;
      people.mass = input.mass;
      people.skin_color = input.skin_color;
      return people;
    }

    public getAssociatedObjects(dataService: StarWarsService){

      this.getAssociatedFilms(dataService);

  }

  private getAssociatedFilms(dataService: StarWarsService){
  	this.urlFilms.map((elem)=>{
  		 dataService.getObjectByUrl(new Film(), elem)
  				.subscribe((result) => {
  					this.associetedFilms.push(result);
  					console.log('RESULT !!! ' + JSON.stringify(result));
  				}),
  				(error) => {
  						console.log(error);
  				};
  	});

  }
}
