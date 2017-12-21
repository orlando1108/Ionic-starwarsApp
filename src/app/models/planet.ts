import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Film } from '../models/film';
import { presentAlert } from '../factory/starWarsFactory';
import { AlertController } from 'ionic-angular';


export class Planet extends Starwars {

	public name: string = "";
	public climate: string = "";
	public created: string = "";
	public diameter: string = "";
	public gravity: string = "";
	public population: string = "";
	public terrain: string = "";
	public orbital_period: string = "";
	public urlFilms: string[] = [];
	public urlResidents: string[] = [];
	public associatedPeople: People[]=[];
	public associatedFilms: Film[]=[];
	private nbErrors: number = 0;

	constructor() {
		super();
	}

	public jsonToObject(input) {
		let planet = new Planet();
		let arrayUrl = input.url.split("/");
		planet.id = arrayUrl[arrayUrl.length - 2];
		planet.name = input.name;
		planet.climate = input.climate;
		planet.created = input.created;
		planet.diameter = input.diameter;
		planet.gravity = input.gravity;
		planet.url = input.url;
		planet.population = input.population;
		planet.urlFilms = input.films;
		planet.urlResidents = input.residents;
		planet.terrain = input.terrain;
		planet.orbital_period = input.orbital_period;
		planet.pathImage = `assets/imgs/starwars/planets/${planet.id}.jpg`;
		return planet;
	}

	public getAssociatedObjects(dataService: StarWarsService,alertCtrl: AlertController){

	 this.getAssociatedResidents(dataService,alertCtrl);
    this.getAssociatedFilms(dataService,alertCtrl);

		if(this.nbErrors > 0){
			console.log(' errors !!! '+ this.nbErrors);
			//presentAlert(alertCtrl);
		}
}

private getAssociatedFilms(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlFilms.map((elem)=>{
		 dataService.getObjectByUrl(new Film(), elem)
				.subscribe((result) => {
					this.associatedFilms.push(result);
				},
				(error) => {
						//this.nbErrors ++;
						//presentAlert(alertCtrl);
				});
	});

}
private getAssociatedResidents(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlResidents.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.associatedPeople.push(result);
				},
				(error) => {
					//this.nbErrors ++;
          //presentAlert(alertCtrl);
				});
	});

}
}
