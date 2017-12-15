import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';

export class Film extends Starwars {

  public title: string = "";
  public director: string = "";
  public producer: string = "";
  public release_date: string = "";
  public opening_crawl: string = "";
  public urlCharacters: string[] = [];
  public associetedPeople: People[] = [];

  constructor() {
    super();
  }

  public jsonToObject(input): Starwars {
    let film = new Film();
    let arrayUrl = input.url.split("/");
    film.id = arrayUrl[arrayUrl.length - 2]
    film.title = input.title;
    film.director = input.director;
    film.producer = input.producer;
    film.release_date = input.release_date;
    film.url = input.url;
    film.opening_crawl = input.opening_crawl;
    film.urlCharacters = input.characters;
    return film;
  }

  public getAssociatedObjects(dataService: StarWarsService){

  /*  console.log('URLS !!! ' + this.urlPilots);
		console.log('id  '+ this.id);*/
		this.getAssociatedPilots(dataService);

}

private getAssociatedPilots(dataService: StarWarsService){
	this.urlCharacters.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.associetedPeople.push(result);
						console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
}
