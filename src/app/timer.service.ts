import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  countDown: Subscription;
  counter: 1800;
  tick: 1000;

  constructor() {}

  ngOnInIt() {
    this.countDown = timer(0, this.tick).subscribe(() => this.counter)
  }

  ngOnDestroy() {
    this.countDown = null;
  }

  getCount() {
    return this.counter;
  }
}