import { Injectable, signal } from '@angular/core';
import { GymLeader } from '../models/gym-leader';

@Injectable({ providedIn: 'root' })
export class HoennLeadersService {
  // Private signal holding the Hoenn Gym Leaders data
  private hoennLeaders = signal<GymLeader[]>([
    {
      name: 'Roxanne',
      age: 16,
      location: 'Rustboro City',
      specialty: 'Rock',
      team: 'Geodude (Lv. 12), Geodude (Lv. 12), Nosepass (Lv. 15)',
      badge: 'Stone Badge',
      monologue: 'I studied hard at the Trainer School. Now let me show you what I learned about Rock types!',
      themeColor: '#8d6e4a'
    },
    {
      name: 'Brawly',
      age: 19,
      location: 'Dewford Town',
      specialty: 'Fighting',
      team: 'Machop (Lv. 16), Meditite (Lv. 16), Makuhita (Lv. 19)',
      badge: 'Knuckle Badge',
      monologue: 'I train by riding the big waves. Can you handle a wave of my Fighting Pokemon?',
      themeColor: '#c0392b'
    },
    {
      name: 'Wattson',
      age: 60,
      location: 'Mauville City',
      specialty: 'Electric',
      team: 'Voltorb (Lv. 20), Electrike (Lv. 20), Magneton (Lv. 22), Manectric (Lv. 24)',
      badge: 'Dynamo Badge',
      monologue: 'Wahahaha! I built this city with electricity. Let us see if you can take the shock!',
      themeColor: '#d4a017'
    },
    {
      name: 'Flannery',
      age: 18,
      location: 'Lavaridge Town',
      specialty: 'Fire',
      team: 'Numel (Lv. 24), Slugma (Lv. 24), Camerupt (Lv. 26), Torkoal (Lv. 29)',
      badge: 'Heat Badge',
      monologue: 'I may be new as a Gym Leader, but my Fire Pokemon burn just as hot!',
      themeColor: '#e25822'
    },
    {
      name: 'Norman',
      age: 38,
      location: 'Petalburg City',
      specialty: 'Normal',
      team: 'Spinda (Lv. 27), Vigoroth (Lv. 27), Linoone (Lv. 29), Slaking (Lv. 31)',
      badge: 'Balance Badge',
      monologue: 'As a Gym Leader and a father, I will not hold back. Show me how much you have grown.',
      themeColor: '#7f8c8d'
    },
    {
      name: 'Winona',
      age: 24,
      location: 'Fortree City',
      specialty: 'Flying',
      team: 'Swablu (Lv. 29), Tropius (Lv. 29), Pelipper (Lv. 30), Skarmory (Lv. 31), Altaria (Lv. 33)',
      badge: 'Feather Badge',
      monologue: 'My bird Pokemon and I fly as one. Try to keep up with us in the sky!',
      themeColor: '#5c8fd6'
    },
    {
      name: 'Tate & Liza',
      age: 12,
      location: 'Mossdeep City',
      specialty: 'Psychic',
      team: 'Claydol (Lv. 41), Xatu (Lv. 41), Lunatone (Lv. 42), Solrock (Lv. 42)',
      badge: 'Mind Badge',
      monologue: 'We think as one and battle as one. Can you beat our perfect teamwork?',
      themeColor: '#c2185b'
    },
    {
      name: 'Juan',
      age: 50,
      location: 'Sootopolis City',
      specialty: 'Water',
      team: 'Luvdisc (Lv. 41), Whiscash (Lv. 41), Sealeo (Lv. 43), Crawdaunt (Lv. 43), Kingdra (Lv. 46)',
      badge: 'Rain Badge',
      monologue: 'Battling is an art, and water is my brush. Let me show you true elegance.',
      themeColor: '#1565c0'
    }
  ]);

  // Private signals for the region details and the open card
  private hoennRegionName = signal<string>('Hoenn Region');
  private hoennRegionColor = signal<string>('#0e7c86');
  private openLeader = signal<string>('');

  // Expose the signals as read-only
  leaders = this.hoennLeaders.asReadonly();
  regionName = this.hoennRegionName.asReadonly();
  regionColor = this.hoennRegionColor.asReadonly();
  activeLeader = this.openLeader.asReadonly();

  // The only way a component can change the state
  toggleMonologue = (name: string): void => {
    this.openLeader.update(current => current === name ? '' : name);
  };
}
