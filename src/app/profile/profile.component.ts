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
    // @Input() user: User;   
  

  constructor(private profileservice: ProfileService) {
    this.profileservice.getProfileInfo().subscribe(profile => {
      console.log(profile);
    });
  }

  ngOnInit() {
  }

}
