import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Film } from '../models/film';

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
	public people: People[]=[];
	public films: Film[]=[];

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
	  return specie;
	}

	public getAssociatedObjects(dataService: StarWarsService){

  /*  console.log('URLS !!! ' + this.urlPilots);
		console.log('id  '+ this.id);*/
    this.getAssociatedFilms(dataService);
		this.getAssociatedPilots(dataService);

}

private getAssociatedFilms(dataService: StarWarsService){
	this.urlFilms.map((elem)=>{
		 dataService.getObjectByUrl(new Film(), elem)
				.subscribe((result) => {
					this.films.push(result);
					console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
private getAssociatedPilots(dataService: StarWarsService){
	this.urlPeople.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.people.push(result);
						console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
}
