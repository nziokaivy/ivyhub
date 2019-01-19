import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userName: string;
  private clientId = 'b67065b9d497b73f0da3';
  private clientSecret =  '2e59dc982760d82633f4e3b37a9a0315b3b0fd1b';

  constructor(private http: HttpClient) {
    console.log("We are ready!");
    return this.http.get()
   }
}
