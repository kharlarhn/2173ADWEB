import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project'; //Interpolation
  clientName = 'Owner: Kharla Manabat'; // Property Binding
  appliedCSS = 'white'; // Class Binding
  notAppliedCSS = false;
  myColor = 'gray'; //Style Binding


//EVENT BINDING
showData($event: any) {
  console.log('Order Button is clicked!');
  if ($event) {
    console.log($event.target);
    console.log($event.target.value);

  }
}
  
}


