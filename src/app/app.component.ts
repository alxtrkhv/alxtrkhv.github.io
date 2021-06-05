import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { pageChangeAnimation } from './app-routing-animations';
import { ConfigService } from './core/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [pageChangeAnimation],
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.title = this.config.getValue('SiteTitle');
    document.getElementById('favicon').setAttribute('href', this.config.getHomeAvatar(32));
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
