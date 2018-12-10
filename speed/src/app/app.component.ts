import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from './store/services/api.service';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speed';
  public developerVersion = '3';

  constructor(swUpdate: SwUpdate) {

    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = 'There is a new version of the application available. Do you want to load it?\n' +
          'current hash: ' + event.current.hash + '\nnew: ' + event.available.hash;

          if (confirm(msg)) window.location.reload();
        }
      );
    }
  }
}
