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

  constructor(
    public gitHubService: GithubService,
    public bitcoinService: BitcoinService) {
      this.bitcoinService.myTimer(1000);
  }

  ngOnInit() {
    this.gitHubService.update();
  }

  updateBitcoinRates() {
    this.bitcoinService.update();
  }
}
