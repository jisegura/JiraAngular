import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Rol } from '@app/model/rol.model';

const checkUrl: string = "agent/check-user-rol";

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  public rolData: Rol;

  constructor(
    private http: HttpClient
  ) { }

  public checkUser(): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.getCheckUser().subscribe(rol => {
      this.rolData = rol;
      console.log('en curso: ');
      console.log(rol);
    }, error => {
      obs.error(error);
    }, () => {
      obs.complete();
    });

    return obs.asObservable();
  }

  private getCheckUser(): Observable<Rol>{
    return this.http.get<Rol>(checkUrl).pipe(
      catchError(err => {
        return throwError("Error thrown from catchError");
      })
    );
  }
}
