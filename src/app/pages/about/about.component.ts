import { Component } from '@angular/core';
import aboutMarkdown from "!!raw-loader!src/assets/markdown/about.md";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../shared/styles/page.css', './about.component.css'],
})
export class AboutComponent {
  mainText = aboutMarkdown;
}
