
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { People } from '../models/people';
import { Film } from '../models/film';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';
import { Specie } from '../models/specie';
import { Planet } from '../models/planet';

import { Event } from '../models/event';
import { jsonToObject, jsonArrayToObjectArray } from '../factory/starWarsFactory';
import { Observable } from 'rxjs/Observable';
import { Starwars } from '../models/starwars';
import "rxjs";

@Injectable()
export class StarWarsService {

	//private oldSearch: string = "";
	private currentPage:number;
	private lastPage: number = 0;
	private nextPageUrl: string = "";
	private principalNextPageUrl: string = "";

	constructor(private http: Http) {
		this.currentPage = 0;
	}
	//
	//Méthode appelé en cas d'erreur
	//
	private handleError(error: Response | any) {
		console.log(error);
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.log(errMsg);
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
		urlRequest = `https://swapi.co/api/${urlRequest}`;
		this.currentPage = 1;
		return this.http.get(urlRequest)
			.map((response) => {

				this.nextPageUrl = response.json()["next"];
				this.principalNextPageUrl = this.nextPageUrl ;
				this.lastPage = Math.ceil(response.json()["count"] / 10);
				return jsonArrayToObjectArray(response.json()["results"], obj);
			}).catch(this.handleError);


	}
	//
	//Permet de récupèrer un object en fonction de son URL
	//
 getObjectByUrl(obj: Starwars, url): Observable<any> {
	 console.log('URL !!! '+ url );
		return this.http.get(url)
			.map((response) => {
				console.log('OBJET PLANET ??? '+ response.json());
				return jsonToObject(response.json(), obj);
			}).catch(this.handleError);
	}

	//
	//Permet de récupèrer un object en fonction de son URL
	//
	getEvents(): Observable<Event[]> {
		return this.http.post('http://62.210.7.82:443/event/', {}, null)
			.map((response) => {console.log(response.json()["content"]);
				//return response.json()["content"];
				return Event.jsonEventToEventArray(response.json()["content"]);
			}).catch(this.handleError);
	}
	//
	//Récupération de tout les personnages
	//
	/*getListPeople(): Observable<People[]>{
		if(this.oldSearch != "")
		{
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
*/
	//
	//Récupération de tout les vaisseau
	//
	/*getListVaisseau(): Observable<Spaceship[]> {
		return this.http.get("https://swapi.co/api/starships")
			.map((response) => {
				this.currentPage = 1;

				this.lastPage = Math.ceil(response.json()["count"]/10);
				return jsonArrayToObjectArray(response.json()["results"], new Starship());
			}).catch(this.handleError);
			}
*/



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
 //prevenir un crash de l'appli si il n'y a pas d'autres pages à lire
	isThereMoreDataToLoad(): boolean {
		//return this.lastPage != this.currentPage;
		return this.nextPageUrl != null;
	}

	getNextPage(obj:any): Observable<any[]> {
		//let urlRequest = obj.constructor.name.toLowerCase();

			this.lastPage <2 ? this.currentPage = 1 : this.currentPage++;
			console.log('current/last page  '+ this.currentPage+ '/'+ this.lastPage );
			//console.log(' next page URL !  '+ this.nextPageUrl);
			return this.http.get(this.nextPageUrl)
				.map((response) => {
					//console.log('JSON nb objects!!!  '+ response.json()["count"]);
					this.nextPageUrl = response.json()["next"];
					console.log('next page '+ this.nextPageUrl);
					return jsonArrayToObjectArray(response.json()["results"],obj);
				}).catch(this.handleError);


	}

	// recherche un item starwars à partir d'un type
	getSearchResult(obj:Starwars, keyWord): Observable<any[]> {
		let searchObject = obj.constructor.name.toLowerCase();
		if (searchObject != "people") {
			  searchObject += "s";
		}
		this.currentPage = 1;
		console.log('current/last page  '+ this.currentPage+ '/'+ this.lastPage );
		return this.http.get(`https://swapi.co/api/${searchObject}/?search=${keyWord}`)
			.map((response) => {
				//console.log('JSON !!!  '+ jsonArrayToObjectArray(response.json()["results"],obj));
				this.nextPageUrl = response.json()["next"];
				this.lastPage = Math.ceil(response.json()["count"] / 10);
				return jsonArrayToObjectArray(response.json()["results"],obj);
			}).catch(this.handleError);
	}

	resetPageInformations(){
		this.currentPage = 1;
		this.nextPageUrl = this.principalNextPageUrl;
		//this.lastPage = 0;
	}

}
