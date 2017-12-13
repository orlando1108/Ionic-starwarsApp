import { Starwars } from '../models/starwars';

export class Specie extends Starwars{
	public eye_colors : string = "";
	public classification : string = "";
	public average_lifespan: string = "";
	public hair_colors: string = "";
  public homeworld: string = "";
  public language: string = "";
  public films: string[] = [];
  public name: string = "";
	public people: string[] = [];
  public skin_colors: string = "";
	constructor()
	{
		super();
	}

	public jsonToObject(input) {
	  let specie = new Specie();
	  let arrayUrl = input.url.split("/");
	  specie.id = arrayUrl[arrayUrl.length - 2];
    specie.url = input.url;
	  specie.eye_colors = input.eye_colors;
	  specie.classification = input.classification;
  	specie.average_lifespan = input.average_lifespan;
	  specie.hair_colors = input.hair_colors;
	  specie.homeworld = input.homeworld;
	  specie.language = input.language;
	  specie.films = input.films;
	  specie.name = input.name;
	  specie.people = input.people;
	  specie.skin_colors = input.skin_colors;
	  return specie;
	}
}
