import { Component, input } from '@angular/core';
import { PathElementComponent } from "../path-element/path-element.component";
import { RoadmapElement } from '../path-element/roadmap-element.model';

@Component({
  selector: 'app-road-map',
  imports: [PathElementComponent],
  templateUrl: './road-map.component.html',
  styleUrl: './road-map.component.css',
})
export class RoadMapComponent {
  roadMapElements = input.required<RoadmapElement[]>()

}
