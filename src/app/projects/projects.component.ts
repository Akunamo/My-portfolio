import { Component, OnInit } from '@angular/core';
// import projectData from '../../assets/data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectData: any;

  constructor() { }

  ngOnInit(): void {
    fetch("../../assets/data.json")
      .then((data) => {
        return data.json()
      })
      .then(data => 
        this.projectData = data);

  }

}
