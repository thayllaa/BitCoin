import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class TimerService {
  autoStart = true;
  private timer: any;
  private counter: 0;

  constructor() {}

  startCounter(ms:number) {
    return this.autoStart;
  }

  resetCounter() {}

  getCounter() {
    return this.counter;
  }
}