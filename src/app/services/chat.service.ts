
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Config } from '../config';
import { Request, ErrorRequest, SuccesRequest } from '../models/request';
import { ErrorType } from '../models/error';

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
        return Observable.throw(errMsg);
    }
    public connect(mail: String, username: String): Observable<Request> {

        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let self = this;
        return this.http.post(Config.AssosApiUrl + "/chat/connect", { mail: mail, username: username }, options)
            .map((res: Response) => self.statutToRequest(res))
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }
    public statutToRequest(res: Response) {
        let result = res.json();
        console.log(result);
        if (result.statut == 200) {
            return new SuccesRequest(result.content);
        } else {
            return new ErrorRequest(new ErrorType(result.statut, result.exception));;
        }
    }



}
