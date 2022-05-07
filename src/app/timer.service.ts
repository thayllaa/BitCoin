import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: 0;

  constructor() {}

  startCount(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  resetCount() {
    if (this.timer > 60) {
      this.counter = null;
    }
  }
}
