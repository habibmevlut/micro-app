import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IUserResult } from './user.module';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { PagingParams } from '../app/constants/pagination.constants';
import { createRequestOption } from '../app/util/request-util';


@Injectable({providedIn: 'root'})

export class UserService {
  public resourceUrl = 'https://dummyapi.io/data/v1/';

  constructor(private http: HttpClient) {
  }

  /*========================================
    CRUD Methods for consuming RESTFULL API
  =========================================*/

  getAll(req?: PagingParams): Observable<HttpResponse<IUserResult>> {
    const options = createRequestOption(req);
    const httpOption = new HttpHeaders({
        'Content-Type': 'application/json',
        'app-id': '611f33c594916dee4af13a68'
      }
    )
    return this.http.get<IUserResult>(this.resourceUrl + 'user', {
      params: options,
      observe: 'response',
      headers: httpOption
    })
      .pipe(
        retry(1), catchError(this.handleError)
      );
  }

  getById(req?: PagingParams): Observable<HttpResponse<IUserResult>> {
    const options = createRequestOption(req);
    const httpOption = new HttpHeaders({
        'Content-Type': 'application/json',
        'app-id': '611f33c594916dee4af13a68'
      }
    )
    return this.http.get<IUserResult>(this.resourceUrl + 'user', {
      params: options,
      observe: 'response',
      headers: httpOption
    })
      .pipe(
        retry(1), catchError(this.handleError)
      );
  }



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
