import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  video: any;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit() {
    this.video = document.getElementById("background");
    this.video.playbackRate = 0.7;
  }

}
