import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() imagePath: string;
  @Input() name: string;
  @Input() description: string;
  @Input() links: [string, string][];
}
