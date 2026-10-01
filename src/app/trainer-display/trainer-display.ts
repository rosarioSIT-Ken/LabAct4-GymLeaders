import { Component, inject } from '@angular/core';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-trainer-display',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1>Pokemon League Registry</h1>

      @for (trainer of trainerService.trainers(); track trainer.name) {
        <div class="trainer-card">
          <h2>Trainer: {{ trainer.name }}</h2>
          <ul>
            @for (pokemon of trainer.team; track $index) {
              <li>
                <strong>{{ pokemon }}</strong> &mdash;
                <small>Held Item: {{ trainer.items[$index] }}</small>
              </li>
            }
          </ul>
        </div>
      }
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    h1 {
      font-size: 1.6rem;
      margin: 0 0 0.5rem;
    }
    .trainer-card {
      padding: 1rem;
      border-radius: 8px;
      background: #f5f5f5;
      border-left: 6px solid #e53935;
    }
    .trainer-card h2 {
      margin: 0 0 0.5rem;
      font-size: 1.2rem;
    }
    ul { margin: 0; padding-left: 1.2rem; }
    li { margin: 4px 0; }
    small { color: #555; }
  `
})
export class TrainerDisplay {
  trainerService = inject(TrainerService);
}
