import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../profile.service';
// import { User } from '../profile';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ngOnInit() {
   }
   
  profile: object;
  repos: any[];
  username: string;
  profileservice: ProfileService;
    // @Input() user: User;   

  search() {
    this.profileservice.updateProfile(this.username);
      this.profileservice.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
    
  this.profileservice.getRepoInfo().subscribe(repos => {
    this.repos = repos;
  })
    }

  }