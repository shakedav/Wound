import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('dotsContainer') dotsContainer: ElementRef;
  title = 'wound';
  dotsPositions = [
    {
      x: 47.037,
      y: 41.927,
    },
    {
      x: 43.056,
      y: 42.708,
    },
    {
      x: 39.444,
      y: 45.104,
    },
    {
      x: 37.685,
      y: 46.979,
    },
    {
      x: 35.278,
      y: 50.156,
    },
    {
      x: 36.204,
      y: 52.448,
    },
    {
      x: 38.889,
      y: 55.469,
    },
    {
      x: 42.685,
      y: 57.76,
    },
    {
      x: 45.741,
      y: 58.75,
    },
    {
      x: 53.981,
      y: 59.167,
    },
    {
      x: 56.111,
      y: 56.667,
    },
    {
      x: 57.685,
      y: 54.375,
    },
    {
      x: 58.704,
      y: 51.719,
    },
    {
      x: 58.796,
      y: 48.49,
    },
    {
      x: 57.315,
      y: 44.844,
    },
    {
      x: 53.796,
      y: 43.073,
    },
    {
      x: 50.926,
      y: 42.031,
    },
  ];
  isDragging: boolean;

  addNewDot(event, isNewDot) {
    if (!this.isDragging) {
      this.dotsPositions.push(this.getPercentagePosition(event.x, event.y));
      this.dotsPositions.sort((a, b) => (a.x > b.x ? 1 : -1));
    } else {
      this.isDragging = false;
    }
  }

  getPercentagePosition(x, y) {
    return {
      x: ((x - 15) / this.dotsContainer.nativeElement.clientWidth) * 100,
      y: ((y - 15) / this.dotsContainer.nativeElement.clientHeight) * 100,
    };
  }

  dropped(event, prevPosition) {
    const objInArrInd = this.dotsPositions.findIndex(
      (o) => o.x === prevPosition.x
    );
    if (objInArrInd >= 0) {
      const newXY = this.getPercentagePosition(
        event.distance.x,
        event.distance.y
      );
      this.dotsPositions[objInArrInd] = Object.assign(
        {},
        { x: newXY.x + prevPosition.x, y: newXY.y + prevPosition.y }
      );
    }
  }

  onDragStart() {
    this.isDragging = true;
  }
}
