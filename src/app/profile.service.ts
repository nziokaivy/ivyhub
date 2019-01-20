import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './profile'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userName: string;
  private clientId = 'b67065b9d497b73f0da3';
  private clientSecret =  '2e59dc982760d82633f4e3b37a9a0315b3b0fd1b';

  constructor(private http: HttpClient) {
    console.log("We are ready!");
    this.userName = '';
   }
   
  getProfileInfo(){
     if(this.userName) {
     return this.http.get("https://api.github.com/users/" + this.userName
      + "'?client_id=" + this.clientId 
      + "&client_secret=" + this.clientSecret)
      .map(res => res.json());
   }
  }
}
