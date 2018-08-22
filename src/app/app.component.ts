import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Here we created 2 users using `User` class
   * @type {User}
   */
  user1 = new User('Aria', 'Admin', 23);
  user2 = new User('Mike', 'Manager', 24);

  /**
   * This function will execute after component loading.
   * Check the console (F-12)
   * `JSON.stringify` it`s a trick to print objects in console
   */
  ngOnInit() {
    console.log(this.user1);
    console.log(JSON.stringify(this.user1, null, 2));
    console.log(this.user2);
    console.log(JSON.stringify(this.user2, null, 2));
  }

}
