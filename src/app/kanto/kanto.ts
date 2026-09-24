import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { GymLeader } from '../models/gym-leader';
@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css'
})
export class Kanto {
  regionName: string = 'Kanto Region';
  regionColor: string = '#c0392b';
  openLeader: string = '';

  leaders: GymLeader[] = [
    {
      name: 'Brock',
      age: 15,
      location: 'Pewter City',
      team: 'Geodude (Lv. 12), Onix (Lv. 14)',
      badge: 'Boulder Badge',
      monologue: 'Every new trainer starts here. My Rock types will show you if you are ready for the road ahead.',
      themeColor: '#7f6a4e'
    },
    {
      name: 'Misty',
      age: 16,
      location: 'Cerulean City',
      team: 'Staryu (Lv. 18), Starmie (Lv. 21)',
      badge: 'Cascade Badge',
      monologue: 'My Water Pokemon are fast and fierce. Think you can keep your head above water?',
      themeColor: '#2980b9'
    },
    {
      name: 'Lt. Surge',
      age: 35,
      location: 'Vermilion City',
      team: 'Voltorb (Lv. 21), Pikachu (Lv. 18), Raichu (Lv. 24)',
      badge: 'Thunder Badge',
      monologue: 'Electric Pokemon kept me alive in battle. Now they will shock you into giving up!',
      themeColor: '#d4a017'
    },
    {
      name: 'Erika',
      age: 20,
      location: 'Celadon City',
      team: 'Victreebel (Lv. 29), Tangela (Lv. 24), Vileplume (Lv. 29)',
      badge: 'Rainbow Badge',
      monologue: 'I love the calm of flowers. But do not mistake calm for weakness.',
      themeColor: '#27ae60'
    },
    {
      name: 'Koga',
      age: 40,
      location: 'Fuchsia City',
      team: 'Koffing (Lv. 37), Muk (Lv. 39), Koffing (Lv. 37), Weezing (Lv. 43)',
      badge: 'Soul Badge',
      monologue: 'A ninja strikes from the shadows. My poison will wear you down before you notice.',
      themeColor: '#8e44ad'
    },
    {
      name: 'Sabrina',
      age: 21,
      location: 'Saffron City',
      team: 'Kadabra (Lv. 38), Mr. Mime (Lv. 37), Venomoth (Lv. 38), Alakazam (Lv. 43)',
      badge: 'Marsh Badge',
      monologue: 'I already saw how this battle ends. Still, I will let you try.',
      themeColor: '#c2185b'
    },
    {
      name: 'Blaine',
      age: 60,
      location: 'Cinnabar Island',
      team: 'Growlithe (Lv. 42), Ponyta (Lv. 40), Rapidash (Lv. 42), Arcanine (Lv. 47)',
      badge: 'Volcano Badge',
      monologue: 'You answered my quiz, now face my fire! Hope you packed Burn Heal!',
      themeColor: '#e25822'
    },
    {
      name: 'Giovanni',
      age: 45,
      location: 'Viridian City',
      team: 'Rhyhorn (Lv. 45), Dugtrio (Lv. 42), Nidoqueen (Lv. 44), Nidoking (Lv. 45), Rhydon (Lv. 50)',
      badge: 'Earth Badge',
      monologue: 'You made it to the last gym. Let me show you real power.',
      themeColor: '#6d4c41'
    }
  ];

  toggleMonologue = (name: string): void => {
    this.openLeader = this.openLeader === name ? '' : name;
  };
}