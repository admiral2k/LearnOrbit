import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { HowItWorksComponent } from "./how-it-works-page/how-it-works.component";

@Component({
  selector: 'app-main-page',
  imports: [HeroComponent, HowItWorksComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {

}
