import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient 
  ) { }

  getUsersByName(name: string): Observable<User[]> {
    // return this.http.get<User[]>(this.url+`q?name=${name}`);
    if (!name.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    const url = `${this.url}/q?name=${name}`;
    return this.http.get<User[]>(url).pipe(
      tap(x => console.log(`fetched users ${x}`)),
      catchError(this.handleError<User[]>(`search users with name=${name}`))
    );
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}