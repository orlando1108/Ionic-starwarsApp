import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Film } from '../models/film';
import { presentAlert } from '../factory/starWarsFactory';
import { AlertController } from 'ionic-angular';


export class Specie extends Starwars{
	public eye_colors : string = "";
	public classification : string = "";
	public average_lifespan: string = "";
	public hair_colors: string = "";
  public homeworld: string = "";
  public language: string = "";
  public urlFilms: string[] = [];
  public name: string = "";
	public urlPeople: string[] = [];
  public skin_colors: string = "";
	public associatedPeople: People[] = [];
	public associatedFilms: Film[] = [];

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
	  specie.urlFilms = input.films;
	  specie.name = input.name;
	  specie.urlPeople = input.people;
	  specie.skin_colors = input.skin_colors;
		specie.pathImage = `assets/imgs/starwars/species/${specie.id}.jpg`;
	  return specie;
	}

	public getAssociatedObjects(dataService: StarWarsService,alertCtrl: AlertController){
    this.getAssociatedFilms(dataService,alertCtrl);
		this.getAssociatedPeople(dataService,alertCtrl);

}

private getAssociatedFilms(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlFilms.map((elem)=>{
		 dataService.getObjectByUrl(new Film(), elem)
				.subscribe((result) => {
					this.associatedFilms.push(result);
				},
				(error) => {
						///presentAlert(alertCtrl);
				});
	});

}
private getAssociatedPeople(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlPeople.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.associatedPeople.push(result);
				},
				(error) => {
						//presentAlert(alertCtrl);
				});
	});

}
}
