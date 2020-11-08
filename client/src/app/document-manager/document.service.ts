import { Injectable } from '@angular/core';
import { Document } from "./document";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  url = 'http://localhost:3000/api/documents';
  constructor(
    private http: HttpClient
  ) { }

  getDocumentList(skip: number = 0, limit: number = 20): Observable<Document[]> {
    const url = `${this.url}/?skip=${skip}&limit=${limit}`; 
    return this.http.get<Document[]>(url).pipe(
      tap(x => console.log(`fetched docs ${x}`)),
      catchError(this.handleError<Document[]>(`search users with name=${name}`))
    )
  }

  getCollectionSize(): Observable<number> {
    const url = `${this.url}/size`; 
    return this.http.get<number>(url).pipe(
      tap(x => console.log(`Docs in db: ${x}`)),
      catchError(this.handleError<number>(`error fetching document collection size`))
    )
  }

  deleteOne(document: Document): Observable<any> {
    const url = `${this.url}/${document._id}`; 
    return this.http.delete(url).pipe(
      catchError(this.handleError<number>(`error deleting document`))
    )
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
