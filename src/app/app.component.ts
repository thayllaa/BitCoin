import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'HttClient Application';

  constructor(
    public gitHubService: GithubService,
    public bitcoinService: BitcoinService) {
      this.bitcoinService.startTimer(1000);
  }

  ngOnInIt() {
    this.gitHubService.update();
  }

  updateBitcoinRates() {
    this.bitcoinService.update();
  }
}
