import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniService {

  constructor(private http : HttpClient) { }

  getUserData(){
    return this.http.get('http://universities.hipolabs.com/search?country=United+States')
  }

}