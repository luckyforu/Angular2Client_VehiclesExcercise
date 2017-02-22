import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class VehicleService {
    private _vehicleApiUrl = 'https://secure-dawn-39718.herokuapp.com/vehicle';
    //private _vehicleApiUrl = 'http://localhost:3030/vehicle';

    constructor(private _http: Http) { }

    getModelsForMake(makeId:number): Observable<any> {
        return this._http.get(this._vehicleApiUrl + '/make/' + makeId)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getMakes(): Observable<any> {
        return this._http.get(this._vehicleApiUrl + '/makes')
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}