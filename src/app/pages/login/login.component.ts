import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/Model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)

  }

  login(){

    this.authService.Login(this.userLogin).subscribe((resp: UserLogin) => {

      this.userLogin = resp;

      environment.token = this.userLogin.token;
      environment.name = this.userLogin.name;
      environment.photo = this.userLogin.photo;
      environment.id = this.userLogin.id;

      this.route.navigate(["/feed"]);

    }, error => {if(error.status == 401 || error.status == 500)
    
      alert("Usuário ou senha estão incorretos!");

    })

  }

}
