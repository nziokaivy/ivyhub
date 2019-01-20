import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../profile';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile: any[];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
  }

}
