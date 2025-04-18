import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeradorService {

  private url = "https://api.adviceslip.com/advice"
  private http = inject(HttpClient)

  getConselhos(): Observable<any> {
    return this.http.get(this.url);
  }

}