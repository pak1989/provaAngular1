import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private linkAnnuncio = 'http://localhost:8080/restebay/rest/annuncio/';

  /* private linkCategory = 'http://localhost:8080/restebay/rest/annuncio/'; */

  constructor(private http: HttpClient) { }

  getAnnunci(): Observable<any> {
    return this.http.get<any>(this.linkAnnuncio);
  }

  getAnnuncioSingolo(id): Observable<any> {
    return this.http.get<any>(this.linkAnnuncio + id);
  }

/*   getCategory(): Observable<any> {

  } */
}
