import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills: string[] = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "Gradle",
    "Angular 8",
    "JavaScript",
    "TypeScript",
    "Node.Js",
    "HTML5",
    "CSS3",
    "Angular Material",
    "Bootstrap 4",
    "MySQL",
    "NoSQL",
    "Git",
    "GitHub",
    "RESTful APIs",
    "Test-Driven Development",
    "Agile / Scrum"
  ];

  constructor() { }

  ngOnInit() {
  }

}
