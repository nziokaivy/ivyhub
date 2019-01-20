import { Component } from '@angular/core';
import { User } from './profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IvyHub';
  public user1: User;

constructor () {
  this.user1 = new User(false,null, '');
 }
}
