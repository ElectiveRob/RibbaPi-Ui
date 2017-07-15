import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Settings } from "app/models/settings";

@Injectable()
export class AppConfig {

    config: Settings;

    constructor(private http: Http) {}

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('/assets/settings.json').map( res => res.json() ).catch((error: any):any => {
                console.log('Configuration file "settings.json" could not be read');
                resolve(true);
                return Observable.throw(error.json().error || 'Server error');
            }).subscribe( result => {
                this.config = result;
                resolve(true);
            });

        });
    }
}