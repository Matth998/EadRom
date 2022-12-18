import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  photo = environment.photo;
  name = environment.name;
  id = environment.id;

  constructor(

    private route: Router

  ) { }

  ngOnInit(){
  }

  logoff(){

    this.route.navigate(['/'])
    environment.token = '';
    environment.name = '';
    environment.photo = '';
    environment.id =0;

  }

}
