
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
	/*private handleError(error: Response | any) {
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

	return this.alert.present();*/

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
			}).catch(error => Observable.throw('an error has occured !'));


	}
	//
	//Permet de récupèrer un object en fonction de son URL
	//
 getObjectByUrl(obj: Starwars, url): Observable<any> {
		return this.http.get(url)
			.map((response) => {
				console.log('OBJET PLANET ??? '+ response.json());
				return jsonToObject(response.json(), obj);
			}).catch(error => Observable.throw('an error has occured !'));
	}

	//
	//Permet de récupèrer une liste d'objets en fonction d'une liste d'url
	//
 getObjectsByUrlList(obj: Starwars, urlList:string[]): Observable<any> {
	 //let objectsList: any[];

	 try {
   throw "monException"; // génère une exception
}
catch (e) {
   // les instructions utilisées pour gérer les
   // exceptions
   logErreurs(e); // on transfère l'objet de l'exception à une méthode
                  // gestionnaire
}
		 urlList.map((url)=>{
			 this.http.get(url)
				.map((response) => {
					console.log('OBJET PLANET ??? '+ response.json());
					return jsonToObject(response.json(), obj);
				}).catch(error => Observable.throw('an error has occured !'));
		});
		return objectsList;

	}


	//
	//Permet de récupèrer un object en fonction de son URL
	//
	getEvents(): Observable<Event[]> {
		return this.http.post('http://62.210.7.82:443/event/', {}, null)
			.map((response) => {console.log(response.json()["content"]);
				//return response.json()["content"];
				return Event.jsonEventToEventArray(response.json()["content"]);
			}).catch(error => Observable.throw('an error has occured !'));
	}


	getPage(pageNumber): Observable<People[]> {
		this.currentPage = pageNumber;
		return this.http.get("https://swapi.co/api/people/?page=" + pageNumber)
			.map((response) => {
				return jsonArrayToObjectArray(response.json()["results"], new People());
			}).catch(error => Observable.throw('an error has occured !'));
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
		console.log('MORE DATA ???   ' + this.nextPageUrl);
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
					return jsonArrayToObjectArray(response.json()["results"],obj);
				})
				.catch(error => Observable.throw('an error has occured !'));


	}

	// recherche un item starwars à partir d'un type
	getSearchResult(obj:Starwars, keyWord): Observable<any[]> {
		let searchObject = obj.constructor.name.toLowerCase();
		if (searchObject != "people") {
			  searchObject += "s";
		}
		this.currentPage = 1;
		return this.http.get(`https://swapi.co/api/${searchObject}/?search=${keyWord}`)
			.map((response) => {
				//console.log('JSON !!!  '+ jsonArrayToObjectArray(response.json()["results"],obj));
				this.nextPageUrl = response.json()["next"];
				this.lastPage = Math.ceil(response.json()["count"] / 10);
				return jsonArrayToObjectArray(response.json()["results"],obj);
			}).catch(error => Observable.throw('an error has occured !'));
	}

	resetPageInformations(){
		this.currentPage = 1;
		this.nextPageUrl = this.principalNextPageUrl;
	}

}
