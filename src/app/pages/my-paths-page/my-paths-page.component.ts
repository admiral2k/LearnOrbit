import { Component } from '@angular/core';
import { PathElementComponent } from "./path-element/path-element.component";
import { RoadMapComponent } from "./road-map/road-map.component";
import { DUMMY_ROADMAP } from './dummy-roadmap';

@Component({
  selector: 'app-my-paths-page',
  imports: [RoadMapComponent],
  templateUrl: './my-paths-page.component.html',
  styleUrl: './my-paths-page.component.css',
})
export class MyPathsPageComponent {
  roadmapElements = DUMMY_ROADMAP
}
