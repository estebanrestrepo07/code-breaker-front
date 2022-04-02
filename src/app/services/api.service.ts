import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public  URL = 'http://localhost:3000';
  public secretPath ='/secret'
  public guestPath = '/match?val='
  public attemptsPath = '/getAttempts'

  constructor(private http: HttpClient) { }

  public setSecret(): Observable<any> {
    return this.http.post<String>(this.URL + this.secretPath, {}).map(Response => {
      return Response
    });
  }

  public match(value): Observable<any> {
    return this.http.get<String>(this.URL + this.guestPath + value).map(Response => {
      return Response
    });
  }

}
