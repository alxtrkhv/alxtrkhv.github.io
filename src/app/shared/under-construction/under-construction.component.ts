import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['../styles/page.css', './under-construction.component.css'],
})
export class UnderConstructionComponent implements OnInit {
  underConstructionText: string = 'The section is under construction';

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.underConstructionText = this.config.getValue('UnderConstructionText');
  }
}
