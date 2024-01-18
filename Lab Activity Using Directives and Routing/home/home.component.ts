import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Image interpolation/binding
  imageUrl:string="assets/kharla.jpeg"; 
  imageW: number = 110;
  imageH: number = 100;

}
