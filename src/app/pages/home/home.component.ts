import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../shared/styles/page.css', './home.component.css'],
})
export class HomeComponent implements OnInit {
  firstLineText: string;
  secondLineText: string;
  avatar: string;
  links: [string, string][];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.firstLineText = this.config.getValue('HomeFirstLine');
    this.secondLineText = this.config.getValue('HomeSecondLine');
    this.avatar = this.config.getValue('HomeAvatar');
    this.links = this.config.getValue('HomeIcons');
  }
}
