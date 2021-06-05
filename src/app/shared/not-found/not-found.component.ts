import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['../styles/page.css', './not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  notFoundText: string;

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.notFoundText = this.config.getValue('NotFoundText');
  }
}
