import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Profile } from './profile';

@Injectable()
 
export class ProfileService {

  // apiUrl = environment.apiUrl;
  private username : string;
  private reponame :string;
  
  //private clientid:'45c711be5b7b227c5b653';
 // private clientsecret:'9b5026866f07b1eb08440f7581b9ab0dd49e604a';
  
  constructor( private http :HttpClient) { 
      console.log ("service is now working !");
      this.username = 'nziokaivy';
     
   
      

  }
getProfileInfo() : any{
  return this.http.get("https://api.github.com/users/" + this.username + "?access_token=631f3af867ec48e0d62a072728ccd80fb463d82f")// + this.clientid + "&client_secret" +this.clientsecret)
    .pipe(map(res=>res));
  }
  

getRepoInfo() :any{
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=631f3af867ec48e0d62a072728ccd80fb463d82f")//+ this.clientid + "&client_secret" +this.clientsecret)
  .pipe(map(res=>res)); 
}
// // getRepo(){
// //   return this.http.get("https://api.github.com/repositories/" + this.reponame+ "?access_token=631f3af867ec48e0d62a072728ccd80fb463d82f")
// //   .pipe(map(res=>res))
// }

updateProfile(username:string) {
this.username = username;
}



}
