import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Film } from '../models/film';
import { presentAlert } from '../factory/starWarsFactory';
import { AlertController } from 'ionic-angular';


export class Starship extends Starwars{
	public name : string = "";
	public model : string = "";
	public manufacturer: string = "";
	public cost_in_credits: string = "";
	public urlFilms: string[] = [];
  public urlPilots: string[] = [];
	public associatedPeople: People[]=[];
	public associatedFilms: Film[]=[];
	constructor()
	{
		super();
	}

	public jsonToObject(input) {
	  let starship = new Starship();
	  let arrayUrl = input.url.split("/");
	  starship.id = arrayUrl[arrayUrl.length - 2]
	  starship.name = input.name;
	  starship.model = input.model;
	  starship.manufacturer = input.manufacturer;
	  starship.cost_in_credits = input.cost_in_credits;
	  starship.url = input.url;
	  starship.urlFilms = input.films;
	  starship.urlPilots = input.pilots;
	  return starship;
	}

	public getAssociatedObjects(dataService: StarWarsService,alertCtrl: AlertController){

    this.getAssociatedFilms(dataService,alertCtrl);
		this.getAssociatedPilots(dataService,alertCtrl);

}

private getAssociatedFilms(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlFilms.map((elem)=>{
		 dataService.getObjectByUrl(new Film(), elem)
				.subscribe((result) => {
					this.associatedFilms.push(result);
				},
				(error) => {
						presentAlert(alertCtrl);
				});
	});

}
private getAssociatedPilots(dataService: StarWarsService,alertCtrl: AlertController){
	console.log('url pilots length  ' + this.urlPilots.length);
	this.urlPilots.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.associatedPeople.push(result);
				},
				(error) => {
						presentAlert(alertCtrl);
				});
	});

}
}
