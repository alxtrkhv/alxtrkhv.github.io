import { Component, OnInit } from '@angular/core';

import { ConfigService } from 'src/app/core/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerText: string;

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.footerText = this.config.getValue('FooterText');
  }
}
