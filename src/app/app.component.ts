import { Component, OnInit } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'HttpClient Application';
  sub: Subscription;
  countDown;
  count;

  constructor(
    public gitHubService: GithubService,
    public bitcoinService: BitcoinService) {
  }

  ngOnInit() {
    this.gitHubService.update();
    this.myTimer();
  }

  myTimer() {
    this.count = 60;
    this.countDown = Observable.timer(0, 1000)
      .subscribe(x => {
        this.count = this.count - 1;
      });

    this.sub = Observable.interval(500)
      .subscribe(x => {
        console.log(this.count);
        if (this.count === 0) {
          this.countDown.unsubscribe();
        }
      });
  }

  updateBitcoinRates() {
    this.bitcoinService.update();
  }
}
