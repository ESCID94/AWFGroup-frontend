import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './domain/login/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: string;

  constructor(private router: Router) {
    this.title = 'Animal World Farms Application';
  }

}
