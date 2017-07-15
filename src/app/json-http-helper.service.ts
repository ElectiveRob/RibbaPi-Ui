import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { RequestArgs } from "@angular/http/src/interfaces";
import { MdSnackBar } from "@angular/material";
import { AppConfig } from "app/app.config";

@Injectable()
export class JsonHttpHelperService {

  // TODO get base url from settings.json
  private baseUrl: string = this.appConfig.config.host;

  protected headers: Headers;
    constructor(private _http: Http, private snackBar: MdSnackBar, private appConfig: AppConfig) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    get(url:string) : Observable<any> {
        return this._http.get(this.baseUrl + url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    post(url:string, data:any, args?: RequestOptionsArgs) : Observable<any> {
        if (args == null) args = {};
        if (args.headers === undefined) args.headers = this.headers;
        return this._http.post(this.baseUrl + url, JSON.stringify(data), args)
            .map((res: Response) => JsonHttpHelperService.json(res))
            .catch(this.handleError);
    }

    put(url:string, data:any, args?: RequestOptionsArgs) : Observable<any> {
        if (args == null) args = {};
        if (args.headers === undefined) args.headers = this.headers;

        return this._http.put(this.baseUrl + url, JSON.stringify(data), args)
            .map((res: Response) => JsonHttpHelperService.json(res))
            .catch(this.handleError);
    }

    remove(url: string, data?: any, args?: RequestOptionsArgs): Observable<any> {
        if (args == null) args = {};

        args.url = this.baseUrl + url;
        args.method = RequestMethod.Delete;
        if (!args.headers) args.headers = this.headers;
        args.body  = data ? JSON.stringify(data) : null;

        return this._http.request(new Request(<RequestArgs>args))
            .map((res: Response) => JsonHttpHelperService.json(res))
            .catch(this.handleError);
    }

    private static json(res: Response): any {
        return res.text() === "" ? res : res.json();
    }

    private handleError(error:any) {
        console.error(error);
        if (error == undefined)
        {
          this.snackBar.open("Error, no connection with the server.", undefined, { duration:5000, extraClasses:["danger"] });
        }
        return Observable.throw(error);
    }

}
