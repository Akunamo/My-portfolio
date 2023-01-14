import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isExpanded = false;
  constructor() { }

  ngOnInit(): void {

  }
  onClick(event:any){
    this.isExpanded = !this.isExpanded;
  }

}
