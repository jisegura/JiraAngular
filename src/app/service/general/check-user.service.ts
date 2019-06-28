import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const checkUrl: string = "check";

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  constructor(
    private http: HttpClient
  ) { }

  public checkUser(): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.getCheckUser().subscribe(categorias => {

    }, error => {
      obs.error(error);
    }, () => {
      obs.complete();
    });

    return obs.asObservable();
  }

  private getCheckUser(): Observable<any>{
    return this.http.get<any>(checkUrl).pipe(
      catchError(err => {
        return throwError("Error thrown from catchError");
      })
    );
  }
}
