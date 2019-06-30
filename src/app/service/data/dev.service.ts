import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Issue } from '@app/model/issue.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const devUrl: string = "agent/show-issues";
const devPutUrl: string = "agent/evaluate"; // mandar issue

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

  public updateDataDev(issue: Issue): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.putDataDev(issue).subscribe(issue => {
      this.dataStore.devDatos.forEach((item, index) => {
        if (item.id === issue.id) {
          this.dataStore.devDatos.splice(index, 1);
        }
      });
      this._devDatos.next(Object.assign({}, this.dataStore).devDatos);
    }, error => {
      obs.error(error);
    }, () => {
      obs.complete();
    });

    return obs.asObservable();
  }

  public updateDataDevById(id: number, evaluation: number): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.putDataDevByID(id, evaluation).subscribe(issue => {
      this.dataStore.devDatos.forEach((item, index) => {
        if (item.id === issue.id) {
          this.dataStore.devDatos.splice(index, 1);
        }
      });
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
        return throwError("Error thrown from catchError: ", err);
      })
    );
  }

  private putDataDev(issue: Issue): Observable<Issue>{
    return this.http.put<Issue>(devPutUrl, issue, httpOptions).pipe(
      catchError(err => {
        return throwError("Error thrown from catchError: ", err);
      })
    );
  }

  private putDataDevByID(id: number, evaluation: number): Observable<Issue>{
    const url: string = devPutUrl + "/" + id + "/" + evaluation;
    return this.http.get<Issue>(url).pipe(
      catchError(err => {
        return throwError("Error thrown from catchError: ", err);
      })
    );
  }
}
