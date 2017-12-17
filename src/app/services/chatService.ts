
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { jsonToObject, jsonArrayToObjectArray } from '../factory/starWarsFactory';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config';
import "rxjs";

@Injectable()
export class ChatService {



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


}
