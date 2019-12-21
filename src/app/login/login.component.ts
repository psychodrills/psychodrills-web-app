import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../dbService';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = new Login()
  hide = true
  constructor(
    private route: Router,
    private dbService: DbService
  ) { }

  authenticate() {
    this.dbService.authenticate(this.user).subscribe(data => {
      if (data.status == 200) {
        this.route.navigate(['/dashboard'])
      }
      else {
        alert('Invalid User Credentials')
      }
    })
  }

  ngOnInit() {
  }

}
