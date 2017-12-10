import { Starwars } from '../models/starwars';

export class Planet extends Starwars {

	public name: string = "";
	public climate: string = "";
	public created: string = "";
	public diameter: string = "";
	public gravity: string = "";
	public population: string = "";
	public terrain: string = "";
	public orbital_period: string = "";
	public films: string[] = [];
	public residents: string[] = [];

	constructor() {
		super();
	}

	public jsonToObject(input) {
		let planet = new Planet();
		let arrayUrl = input.url.split("/");
		planet.id = arrayUrl[arrayUrl.length - 2]
		planet.name = input.name;
		planet.climate = input.climate;
		planet.created = input.created;
		planet.diameter = input.diameter;
		planet.gravity = input.gravity;
		planet.url = input.url;
		planet.population = input.population;
		planet.films = input.films;
		planet.residents = input.residents;
		planet.terrain = input.terrain;
		planet.orbital_period = input.orbital_period;
		return planet;
	}
}
