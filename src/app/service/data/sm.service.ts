import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Sm } from '@app/model/sm.model';

const smUrl: string = "usuario/scrum";

@Injectable({
  providedIn: 'root'
})
export class SmService {

  public smDatos: Observable<Sm[]>;
  private _smDatos: BehaviorSubject<Sm[]>;
  private dataStore: {
    smDatos: Sm[]
  };

  constructor(
    private http: HttpClient
  ) {
    this.dataStore = { smDatos: [] };
    this._smDatos = <BehaviorSubject<Sm[]>> new BehaviorSubject([]);
    this.smDatos = this._smDatos.asObservable();
  }

  public loadDataSm(): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.getDataSm().subscribe(smDatos => {
      this.dataStore.smDatos = smDatos;
      this._smDatos.next(Object.assign({}, this.dataStore).smDatos);
    }, error => {
      obs.error(error);
    }, () => {
      obs.complete();
    });

    return obs.asObservable();
  }

  private getDataSm(): Observable<Sm[]>{
    return this.http.get<Sm[]>(smUrl).pipe(
      catchError(err => {
        return throwError("Error thrown from catchError");
      })
    );
  }
}
