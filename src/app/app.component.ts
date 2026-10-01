import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TrainerDisplay } from './trainer-display/trainer-display';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TrainerDisplay],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Gym Leader Records';
  subtitle: string = 'A field guide to the Gym Leaders of Kanto, Johto, and Hoenn.';
}