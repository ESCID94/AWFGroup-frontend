import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';
import { LoginService } from '../service/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User;
  users: User[];
  found: boolean = false;
  isShown: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: LoginService) {
    this.user = new User();
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }


  login(user: User) {

    this.userService.findAll().subscribe(data => {
      this.users = data;
    });

    this.users.forEach(element => {
      if (element.email == user.email && element.password == user.password) {
        this.found = true;
      }
      else {
        this.found = false;
      }
    });

    if (this.found) {
      alert("User logged in!");
      this.isShown = true;
      
    }
    else {
      alert("User not logged in, you have to register!");
      window.location.reload();
    }
  }


  save(user: User) {
    this.userService.save(user).subscribe(data =>
      console.log(data), error => console.log(error));

    this.goToAnimals;
  }

  goToAnimals() {
    this.router.navigateByUrl("http://localhost:4200/AWF-app/v1/animals");
  }
}
