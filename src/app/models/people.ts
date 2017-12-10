import { Starwars } from '../models/starwars';

export class People extends Starwars{
	public name : string = "";
	public gender : string = "";
	public birth_year: string = "";
	public eye_color: string = "";
	public hair_color: string = "";
	public films: string[] = [];
	public homeworld: string = "";
	public height: string = "";
	public mass: string = "";
	public skin_color: string = "";
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
	  people.films = input.films;
	  people.homeworld = input.homeworld;
	  people.height = input.height;
	  people.mass = input.mass;
	  people.skin_color = input.skin_color;
	  return people;
	}
}
