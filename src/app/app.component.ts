import { AfterViewInit, Component, ViewChild, ViewChildren} from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit{
@ViewChild('hero') header:HeroSectionComponent;

  title = 'Portfolio';

  public lightTheme= false;

  themeSwitch(event:any) {
    this.lightTheme = !this.lightTheme;
    this.header.changeFill()
  }
  ngAfterViewInit(): void {
    
  }

}
