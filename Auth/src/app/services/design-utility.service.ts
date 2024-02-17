import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
private apiUrl : any;
  constructor(private http : HttpClient) { 
    // this.loadConfig();
  }

  // private loadConfig() {
  //   // Assuming config.json is in the assets folder
  //   this.http.get<any>('/config.json').subscribe(config => {
  //     this.apiUrl = config.apiUrl
  //   });
  // }

  // fetchData(): Observable<any>{
  //   return this.http.get<any>(`${this.apiUrl}`)
  // }
}
