import { Component, input, signal } from '@angular/core';
import { PathElementComponent } from "../path-element/path-element.component";
import { RoadmapElement } from '../path-element/roadmap-element.model';
import 'leader-line-new';
declare const LeaderLine: any;


@Component({
  selector: 'app-road-map',
  imports: [PathElementComponent],
  templateUrl: './road-map.component.html',
  styleUrl: './road-map.component.css',
})
export class RoadMapComponent {
  roadMapElements = input.required<RoadmapElement[]>()
  private lines = signal<typeof LeaderLine[]>([])


  ngAfterViewInit() {
    for (let i = 0; i < this.roadMapElements().length; i++) {
      if (i == this.roadMapElements().length - 1) break // skip last element BC it has no next element to build a LeaderLine to
      const el1 = document.getElementById('roadMapEl' + this.roadMapElements()[i].id);
      const el2 = document.getElementById('roadMapEl' + this.roadMapElements()[i + 1].id);


      if (el1 && el2) {
        const line = new LeaderLine(el1, el2, { endPlug: "disc" });
        setInterval(() => line.position(), 16); //TODO: Optimaze, may cause performance issues
        this.lines.update((prevLines) => [...prevLines, line])
      }
    }
  }
}
