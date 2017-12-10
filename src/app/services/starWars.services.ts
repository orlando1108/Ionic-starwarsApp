
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { People } from '../models/people';
import { Film } from '../models/film';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';
import { Specie } from '../models/specie';
//import { Spaceship } from '../models/spaceship';
import { Planet } from '../models/planet';
import { jsonToObject, jsonArrayToObjectArray } from '../factory/starWarsFactory';
import { Observable } from 'rxjs/Observable';
import { Starwars } from '../models/starwars';
import "rxjs";

@Injectable()
export class StarWarsService {

	private oldSearch: string = "";
	private currentPage: number = 0;
	private lastPage: number = 0;

	constructor(private http: Http) {
	}
	//
	//Méthode appelé en cas d'erreur
	//
	private handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		//console.error(errMsg);
		return Observable.throw(errMsg);
	}

	//
	//Permet de récupèrer une liste d'objet
	//
	getListObject(obj: Starwars): Observable<any[]> {
		let urlRequest = obj.constructor.name.toLowerCase();
		if (urlRequest != "people") {
			urlRequest += "s";
		}
		urlRequest = `https://swapi.co/api/${urlRequest}`
		return this.http.get(urlRequest)
			.map((response) => {
				this.currentPage = 1;
				this.lastPage = Math.ceil(response.json()["count"] / 10);
				return jsonArrayToObjectArray(response.json()["results"], obj);
			}).catch(this.handleError);
	}
	//
	//Permet de récupèrer un object en fonction de son URL
	//
	getObjectByUrl(obj: Starwars, url): Observable<any> {
		return this.http.get(url)
			.map((response) => {
				return jsonToObject(response.json(), obj);
			}).catch(this.handleError);
	}

	//
	//Récupération de tout les personnages
	//
	/*getListPeople(): Observable<People[]>{
		if(this.oldSearch != "")
		{
=======
	private handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		//console.error(errMsg);
		return Observable.throw(errMsg);
	}
	//
	//Récupération de tout les personnages
	//
	getListPeople(): Observable<People[]> {
		if (this.oldSearch != "") {
>>>>>>> f08662db8b133f75cb9c86c1ee31b20a05e23f5c
			return this.serchPersonnage(this.oldSearch);
		}
		else {
			return this.http.get("https://swapi.co/api/people")
				.map((response) => {
					this.currentPage = 1;
					this.lastPage = Math.ceil(response.json()["count"] / 10);
					return jsonArrayToObjectArray(response.json()["results"], new People());
				}).catch(this.handleError);
		}
	}

	//
	//Récupération de tout les vaisseau
	//
	getListVaisseau(): Observable<Spaceship[]> {
		return this.http.get("https://swapi.co/api/starships")
			.map((response) => {
				this.currentPage = 1;
<<<<<<< HEAD
				this.lastPage = Math.ceil(response.json()["count"]/10);
				return jsonArrayToObjectArray(response.json()["results"], new People());
			}).catch(this.handleError);
			}
	}*/



	//
	/*getListVaisseau(): Observable<Starship[]>{
			return this.http.get("https://swapi.co/api/starships")
			.map((response) => {
				this.currentPage = 1;
				return jsonArrayToObjectArray(response.json()["results"], new Starship());
=======
	//Récupération de tout les vehicules
	//
	getListVehicule(): Observable<Vehicle[]> {
		return this.http.get("https://swapi.co/api/vehicles")
			.map((response) => {
				this.currentPage = 1;
				return jsonArrayToObjectArray(response.json()["results"], new Vehicle());
			}).catch(this.handleError);
	}

	//
	//Récupération de toutes les planets
	//
	getListPlanet(): Observable<Planet[]> {
		return this.http.get("https://swapi.co/api/planets")
			.map((response) => {
				this.currentPage = 1;
				return jsonArrayToObjectArray(response.json()["results"], new Planet());
>>>>>>> f08662db8b133f75cb9c86c1ee31b20a05e23f5c
			}).catch(this.handleError);
	}*/

	//
	//Récupération de tout les vehicules
	//
	/*getListVehicule(): Observable<Vehicle[]>{
		return this.http.get("https://swapi.co/api/vehicles")
		.map((response) => {
		  this.currentPage = 1;
		  return jsonArrayToObjectArray(response.json()["results"], new Vehicle());
		}).catch(this.handleError);
	}*/

	//
	//Récupération de toutes les planets
	//
	/*getListPlanet(): Observable<Planet[]>{
		return this.http.get("https://swapi.co/api/planets")
		.map((response) => {
		  this.currentPage = 1;
		  return jsonArrayToObjectArray(response.json()["results"], new Planet());
		}).catch(this.handleError);
	}*/

	//
	//Récupération de toutes les planets
	//
	/*getListFilm(): Observable<Film[]>{
		return this.http.get("https://swapi.co/api/films")
		.map((response) => {
		  this.currentPage = 1;
		  return jsonArrayToObjectArray(response.json()["results"], new Film());
		}).catch(this.handleError);
	}*/

	//
	//Récupération de toutes les planets
	//
	getListFilm(): Observable<Film[]> {
		return this.http.get("https://swapi.co/api/films")
			.map((response) => {
				this.currentPage = 1;
				return jsonArrayToObjectArray(response.json()["results"], new Film());
			}).catch(this.handleError);
	}

	//
	//Fonction de récupération d'une page en particulier
	//
	getPage(pageNumber): Observable<People[]> {
		this.currentPage = pageNumber;
		return this.http.get("https://swapi.co/api/people/?page=" + pageNumber)
			.map((response) => {
				return jsonArrayToObjectArray(response.json()["results"], new People());
			}).catch(this.handleError);
	}

	getCurrentPage(): number {
		return this.currentPage;
	}

	getLastPage(): number {
		return this.lastPage;
	}

	getNextPage(): Observable<People[]> {
		this.currentPage++;
		return this.http.get("https://swapi.co/api/people/?page=" + this.currentPage)
			.map((response) => {
				return jsonArrayToObjectArray(response.json()["results"], new People());
			}).catch(this.handleError);
	}

	getPersonnageByUrl(url): Observable<People> {
		return this.http.get(url)
			.map((response) => {
				return jsonToObject(response.json(), new People());
			}).catch(this.handleError);
	}
	//
	//Fonction qui permet de récupérer juste le nom d'un objet en fonction de son URL
	//
	getNameByUrl(url): Observable<string> {
		return this.http.get(url)
			.map((response) => {
				return response.json()['name'];
			}).catch(this.handleError);
	}


	getFilmByUrl(url): Observable<Film> {
		return this.http.get(url)
			.map((response) => {
				return jsonToObject(response.json(), new Film());
			}).catch(this.handleError);
	}

	//
	//Fonction de recherche d'un personnage
	//

	serchPersonnage(motClef): Observable<People[]> {
		this.oldSearch = motClef;
		this.currentPage = 1;
		return this.http.get("https://swapi.co/api/people/?search=" + motClef)
			.map((response) => {
				this.lastPage = Math.ceil(response.json()["count"] / 10);
				return jsonArrayToObjectArray(response.json()["results"], new People());
			}).catch(this.handleError);
	}

}
