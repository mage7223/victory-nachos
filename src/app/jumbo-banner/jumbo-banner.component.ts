import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo-banner',
  templateUrl: './jumbo-banner.component.html',
  styleUrls: ['./jumbo-banner.component.css']
})
export class JumboBannerComponent implements OnInit {

  images = [1,2,3,4,5,6,7].map((n) => `/assets/images/nacho${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
