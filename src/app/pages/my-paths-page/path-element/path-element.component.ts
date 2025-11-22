import { Component, input } from '@angular/core';
import { RoadmapElement } from './roadmap-element.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-path-element',
  imports: [CommonModule],
  templateUrl: './path-element.component.html',
  styleUrl: './path-element.component.css',
})
export class PathElementComponent {
  pathElementObj = input.required<RoadmapElement>()
  id = input.required<string>()
  
  get statusClass() {
    return {
      'status-open': this.pathElementObj().status === 'OPEN',
      'status-progress': this.pathElementObj().status === 'IN_PROGRESS',
      'status-done': this.pathElementObj().status === 'DONE',
    };
  }

  get statusLabel() {
    return this.pathElementObj().status
      .replace('_', ' ')
      .toLowerCase();
  }
}
