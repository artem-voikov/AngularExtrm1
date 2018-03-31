import {HttpParams} from '@angular/common/http/src/params';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  public get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${path}`, { params });
  }

  public post<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${path}`, body);
  }
}
