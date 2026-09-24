import { Component, Input } from '@angular/core';

export interface GymLeader {
  name: string;
  type: string;
  badge: string;
  location: string;
  pokemon: string[];
  levels: number[];
  color: string;
}

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [],
  templateUrl: './gym-card.component.html',
  styleUrl: './gym-card.component.css'
})
export class GymCardComponent {
  @Input() leader!: GymLeader;
}