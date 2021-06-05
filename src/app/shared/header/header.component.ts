import { Component, OnInit } from '@angular/core';

import { ConfigService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoText: string;
  logoLink: string;
  routes: [string, string][];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.logoText = this.config.getValue('LogoText');
    this.logoLink = this.config.getValue('LogoLink');
    this.routes = this.config.getValue('NavPanelRoutes');
  }
}
