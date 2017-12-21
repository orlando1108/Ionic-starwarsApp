import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { Vehicle } from '../models/vehicle';
import { Specie } from '../models/specie';
import { Film } from '../models/film';
import { presentAlert } from '../factory/starWarsFactory';
import { AlertController } from 'ionic-angular';


export class People extends Starwars{
    public name : string = "";
    public gender : string = "";
    public birth_year: string = "";
    public eye_color: string = "";
    public hair_color: string = "";
    public urlFilms: string[] = [];
    public urlSpecies: string[] = [];
    public urlVehicles: string[] = [];
    public homeworld: string = "";
    public height: string = "";
    public mass: string = "";
    public skin_color: string = "";
    public associatedFilms: Film[]=[];
    public associatedVehicles: Vehicle[] = [];
    public associatedSpecies: Specie[] = [];

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
      people.urlFilms = input.films;
      people.urlSpecies = input.species;
      people.urlVehicles = input.vehicles;
      people.homeworld = input.homeworld;
      people.height = input.height;
      people.mass = input.mass;
      people.skin_color = input.skin_color;
      return people;
    }

    public getAssociatedObjects(dataService: StarWarsService,alertCtrl: AlertController){

      this.getAssociatedFilms(dataService,alertCtrl);
      this.getAssociatedSpecies(dataService,alertCtrl);
      this.getAssociatedVehicles(dataService,alertCtrl);

  }

  private getAssociatedFilms(dataService: StarWarsService,alertCtrl: AlertController){
  	this.urlFilms.map((elem)=>{
  		 dataService.getObjectByUrl(new Film(), elem)
  				.subscribe((result) => {
  					this.associatedFilms.push(result);
  					//console.log('RESULT !!! ' + JSON.stringify(result));
  				},
  				(error) => {
  						presentAlert(alertCtrl);
  				});
  	});

  }
  private getAssociatedSpecies(dataService: StarWarsService,alertCtrl: AlertController){
    this.urlSpecies.map((elem)=>{
       dataService.getObjectByUrl(new Specie(), elem)
          .subscribe((result) => {
            this.associatedSpecies.push(result);
          },
          (error) => {
              presentAlert(alertCtrl);
          });
    });

  }
  private getAssociatedVehicles(dataService: StarWarsService,alertCtrl: AlertController){
    this.urlVehicles.map((elem)=>{
       dataService.getObjectByUrl(new Vehicle(), elem)
          .subscribe((result) => {
            this.associatedVehicles.push(result);
          },
          (error) => {
              presentAlert(alertCtrl);
          });
    });

  }
}
