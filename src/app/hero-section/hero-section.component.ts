import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})


export class HeroSectionComponent implements OnInit,AfterViewInit {

  fill = "black"
  svgBackground1: string = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='205'%3E%3Cpath d='M-3.57 16.926c112.232 56.456 302.664 98.876 464.615 91.043 154.51-7.474 393.686-37.81 634.988 44.133 217.836 61.578 348.648 36.173 348.648 36.173-.767-158.92-3.914-125.12-4.681-188.275H0Z' style='fill:";
  svgBackground2:string="'/%3E%3C/svg%3E\")";

  svgBackground = this.svgBackground1 + this.fill + this.svgBackground2;

  changeFill(){
    this.fill = this.fill === "black" ? "white" : "black";
    this.svgBackground = this.svgBackground1 + this.fill + this.svgBackground2;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.svgBackground);
    
  }
}
