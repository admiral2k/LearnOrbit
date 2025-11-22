import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { PathElementComponent } from "../path-element/path-element.component";
import { RoadmapElement } from '../path-element/roadmap-element.model';
import { StatusColorMap } from '../path-element/roadmap-element.model';
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
  private destroyRef = inject(DestroyRef)
  private intervalId?: number


  ngAfterViewInit() {
    console.log("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")
    for (let i = 0; i < this.roadMapElements().length; i++) {
      if (i == this.roadMapElements().length - 1) break // skip last element BC it has no next element to build a LeaderLine to
      const el1 = document.getElementById('roadMapEl' + this.roadMapElements()[i].id);
      const el2 = document.getElementById('roadMapEl' + this.roadMapElements()[i + 1].id);


      if (el1 && el2) {
        const startColor = StatusColorMap[this.roadMapElements()[i].status]
        const endColor = StatusColorMap[this.roadMapElements()[i + 1].status]

        const line = new LeaderLine(el1, el2, {
          startPlugColor: startColor,
          endPlugColor: endColor,
          gradient: true,
          endPlug: "disc",
          size: 4
        });
        this.lines.update((prevLines) => [...prevLines, line])
      }
    }

    // Realtime GUI update for reactivity
    this.intervalId = setInterval(() => {
      this.lines().forEach(line => line.position());
    }, 16); //TODO: Optimaze, may cause performance issues 

    // Clean-up
    this.destroyRef.onDestroy(() => {

      console.log('RoadMap destroyed — cleaning up LeaderLine & intervals');

      if (this.intervalId) clearInterval(this.intervalId);

      this.lines().forEach(line => line.remove());
    }
    )
    console.log(this.lines())
  }
}
