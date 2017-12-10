import { Starwars } from '../models/starwars';

export class Film extends Starwars {

  public title: string = "";
  public director: string = "";
  public producer: string = "";
  public release_date: string = "";
  public opening_crawl: string = "";
  public characters: string[] = [];

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
    film.characters = input.characters;
    return film;
  }
}
