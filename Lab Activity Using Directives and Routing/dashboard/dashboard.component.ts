import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


staff = [ 
  { firstName: 'Kurt', lastName: 'Manabat', email: 'kurt@test.com', occupation: 'Student' },   
  { firstName: 'Venice', lastName: 'Luoang', email: 'venice@test.com', occupation: 'Doctor' }, 
  { firstName: 'Gian', lastName: 'Manuel', email: 'gian@test.com', occupation: 'Dancer' }, 
  { firstName: 'Denise', lastName: 'Santos', email: 'denise@test.com', occupation: 'Singer' }, 
  { firstName: 'Michael', lastName: 'Pamintuan', email: 'michael@test.com', occupation: 'Officer' } 
  ];

}
