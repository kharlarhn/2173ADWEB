import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm1';
  presentDate = new Date();
  time$: Observable<Date>;

  data: object = {
    name: 'Kharla', age:20, food:'Nuggets', 
    languages:[
      {lname: 'Js', level:"'Wizard"},
      {lname: 'Python', level:"Average"},
      {lname: 'Cobol', level:"Beginner"},
    ]
  }

  data2: object = {
    name: 'Venice', age:21, food:'Strawberry', 
    languages:[
      {lname: 'Js', level:"'Average"},
      {lname: 'Python', level:"Wizard"},
      {lname: 'Cobol', level:"Beginner"},
    ]
  }

  data3: object = {
    name: 'Denise', age:21, food:'Fries', 
    languages:[
      {lname: 'Js', level:"'Beginner"},
      {lname: 'Python', level:"Average"},
      {lname: 'Cobol', level:"Wizard"},
    ]
  }


  Fruits = [ "Apple","Oange","Grapes","Mango","Kiwi","Pomegrante"];
  price : number = 20000; 
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 2.0859210;

 
  constructor() {
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    );
  }
}


  
  