import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    // Your event handling code goes here
    alert('About us element clicked!');
  }

  claimFreeGift(): void {
    // Replace this with the logic to handle the free gift
    alert('Claiming Free Gift!');
    // Add your custom logic here, for example, opening a modal or navigating to a different page.
  }

  learn="About the Organization";
}





  


  