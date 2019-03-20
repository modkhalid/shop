import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ['/assets/slides/slide1.jpg', '/assets/slides/slide2.jpg', '/assets/slides/slide3.jpg'];
    constructor() {

    }

  ngOnInit() {
  }

}
