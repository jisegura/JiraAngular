import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Issue } from '@app/model/issue.model';

const devUrl: string = "agent/show-issues";
const testUrl: string = "agent/evaluate"; // mandar issue

@Injectable({
  providedIn: 'root'
})
export class DevService {

  public devDatos: Observable<Issue[]>;
  private _devDatos: BehaviorSubject<Issue[]>;
  private dataStore: {
    devDatos: Issue[]
  };


  constructor(
    private http: HttpClient
  ) {
    this.dataStore = { devDatos: [] };
    this._devDatos = <BehaviorSubject<Issue[]>> new BehaviorSubject([]);
    this.devDatos = this._devDatos.asObservable();
  }

  public loadDataDev(): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.getDataDev().subscribe(devDatos => {
      this.dataStore.devDatos = devDatos;
      this._devDatos.next(Object.assign({}, this.dataStore).devDatos);
    }, error => {
      obs.error(error);
    }, () => {
      obs.complete();
    });

    return obs.asObservable();
  }

  public clickDataDev(): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.getDataTEST().subscribe(devDatos => {
      this.dataStore.devDatos = devDatos;
      this._devDatos.next(Object.assign({}, this.dataStore).devDatos);
    }, error => {
      obs.error(error);
    }, () => {
      obs.complete();
    });

    return obs.asObservable();
  }

  private getDataDev(): Observable<Issue[]>{
    return this.http.get<Issue[]>(devUrl).pipe(
      catchError(err => {
        return throwError("Error thrown from catchError");
      })
    );
  }

  private getDataTEST(): Observable<Issue[]>{
    return this.http.get<Issue[]>(testUrl).pipe(
      catchError(err => {
        return throwError("Error thrown from catchError");
      })
    );
  }
}
