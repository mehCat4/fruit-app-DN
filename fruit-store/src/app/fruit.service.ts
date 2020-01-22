import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {Fruit} from "./fruit";

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  // Variables declared here
  private fruitsURL = 'mock-fruits';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  // Functions declared here
  /** GET fruits from the server*/
  getFruits () : Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.fruitsURL);
  }

  /** GET the fruit by ID from the server*/
  getFruit(id: number): Observable<Fruit> {
    const url = `${this.fruitsURL}/${id}`;
    return this.http.get<Fruit>(url);
  }

  /** GET fruit whose name contains the search term*/
  searchFruits(term: string): Observable<Fruit[]> {
    if(!term.trim()) {
      return of ([]);
    }
    return this.http.get<Fruit[]>(`${this.fruitsURL}/?name=${term}`);
  }

  /**
   * Handle HTTP operations that have failed and let the app continue
   * @param operation - the name of the operation that failed
   * @param result - optional value to return as the observable result*/
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
