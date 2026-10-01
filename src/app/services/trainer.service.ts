import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrainerService {

  // Private signal holding the 5 trainers and their nested arrays
  private registry = signal([
    {
      name: 'Ash Ketchum',
      team: ['Pikachu', 'Charizard'],
      items: ['Light Ball', 'Charizardite Y']
    },
    {
      name: 'Misty',
      team: ['Starmie', 'Psyduck', 'Gyarados'],
      items: ['Mystic Water', 'None', 'Gyaradosite']
    },
    {
      name: 'Brock',
      team: ['Onix', 'Geodude', 'Crobat'],
      items: ['Hard Stone', 'Eviolite', 'Black Sludge']
    },
    {
      name: 'Gary Oak',
      team: ['Blastoise', 'Umbreon', 'Arcanine', 'Nidoking'],
      items: ['Mystic Water', 'Leftovers', 'Charcoal', 'Life Orb']
    },
    {
      name: 'Red',
      team: ['Pikachu', 'Venusaur', 'Snorlax'],
      items: ['Light Ball', 'Venusaurite', 'Chesto Berry']
    }
  ]);

  // Expose the signal as read-only
  trainers = this.registry.asReadonly();
}
