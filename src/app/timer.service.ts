import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() {}

  countDown() {}

  getCount() {
    return this.counter;
  }
}