import { Starwars } from '../models/starwars';

export class People extends Starwars {

	public name: string = "";
	public gender: string = "";
	public birth_year: string = "";
	public eye_color: string = "";
	public hair_color: string = "";
	public films: string[] = [];
	public homeworld: string = "";
	public height: string = "";
	public mass: string = "";
	public skin_color: string = "";

	constructor() {
		super();
	}

	public jsonToObject(input) {
		let personnage = new People();
		let arrayUrl = input.url.split("/");
		personnage.id = arrayUrl[arrayUrl.length - 2]
		personnage.name = input.name;
		personnage.birth_year = input.birth_year;
		personnage.eye_color = input.eye_color;
		personnage.gender = input.gender;
		personnage.hair_color = input.hair_color;
		personnage.url = input.url;
		personnage.films = input.films;
		personnage.homeworld = input.homeworld;
		personnage.height = input.height;
		personnage.mass = input.mass;
		personnage.skin_color = input.skin_color;
		return personnage;
	}
}
