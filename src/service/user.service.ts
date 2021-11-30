import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IUserResult } from './user.module';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public resourceUrl = 'https://dummyapi.io/data/v1/';

  constructor(
    private http: HttpClient
  ) {
  }

  /*========================================
    CRUD Methods for consuming RESTFULL API
  =========================================*/

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': '611f33c594916dee4af13a68'
    })
  }

  getAll(): Observable<HttpResponse<IUserResult[]>> {
    const httpOption = new HttpHeaders({
        'Content-Type': 'application/json',
        'app-id': '611f33c594916dee4af13a68'
      }
    )
    return this.http.get<IUserResult[]>(this.resourceUrl + 'user', {observe: 'response', 'headers': httpOption})
      .pipe(
        retry(1), catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(): Observable<IUserResult[]> {
    const httpOption = new HttpHeaders({
        'Content-Type': 'application/json',
        'app-id': '611f33c594916dee4af13a68'
      }
    )

    return this.http.get<IUserResult[]>(this.resourceUrl + 'user', {'headers': httpOption})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
