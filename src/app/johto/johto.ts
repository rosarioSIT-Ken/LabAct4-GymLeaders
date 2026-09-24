import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { GymLeader } from '../models/gym-leader';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto.html',
  styleUrl: './johto.css'
})
export class Johto {
  regionName: string = 'Johto Region';
  regionColor: string = '#1e6f5c';
  openLeader: string = '';

  leaders: GymLeader[] = [
    {
      name: 'Falkner',
      age: 18,
      location: 'Violet City',
      team: 'Pidgey (Lv. 7), Pidgeotto (Lv. 9)',
      badge: 'Zephyr Badge',
      monologue: 'This gym was my father\'s. My Flying types will prove that bird Pokemon are strong!',
      themeColor: '#5c8fd6'
    },
    {
      name: 'Bugsy',
      age: 14,
      location: 'Azalea Town',
      team: 'Metapod (Lv. 14), Kakuna (Lv. 14), Scyther (Lv. 16)',
      badge: 'Hive Badge',
      monologue: 'I have studied Bug Pokemon my whole life. Let me show you what my research can do!',
      themeColor: '#8bc34a'
    },
    {
      name: 'Whitney',
      age: 17,
      location: 'Goldenrod City',
      team: 'Clefairy (Lv. 18), Miltank (Lv. 20)',
      badge: 'Plain Badge',
      monologue: 'Everyone thinks my Pokemon are just cute. Wait until my Miltank starts rolling!',
      themeColor: '#e91e8c'
    },
    {
      name: 'Morty',
      age: 20,
      location: 'Ecruteak City',
      team: 'Gastly (Lv. 21), Haunter (Lv. 21), Haunter (Lv. 23), Gengar (Lv. 25)',
      badge: 'Fog Badge',
      monologue: 'I train to see what others cannot. My Ghost types will test if you can see it too.',
      themeColor: '#6a4c93'
    },
    {
      name: 'Chuck',
      age: 45,
      location: 'Cianwood City',
      team: 'Primeape (Lv. 27), Poliwrath (Lv. 30)',
      badge: 'Storm Badge',
      monologue: 'I train under the waterfall every day. No tricks here, just pure strength!',
      themeColor: '#b03a2e'
    },
    {
      name: 'Jasmine',
      age: 16,
      location: 'Olivine City',
      team: 'Magnemite (Lv. 30), Magnemite (Lv. 30), Steelix (Lv. 35)',
      badge: 'Mineral Badge',
      monologue: 'I may be quiet, but my Steel Pokemon are tough. Please do your best.',
      themeColor: '#7f8c8d'
    },
    {
      name: 'Pryce',
      age: 70,
      location: 'Mahogany Town',
      team: 'Seel (Lv. 27), Dewgong (Lv. 29), Piloswine (Lv. 31)',
      badge: 'Glacier Badge',
      monologue: 'Fifty years with Ice Pokemon taught me patience. Let us see how long you last.',
      themeColor: '#48b0d6'
    },
    {
      name: 'Clair',
      age: 22,
      location: 'Blackthorn City',
      team: 'Dragonair (Lv. 37), Dragonair (Lv. 37), Dragonair (Lv. 37), Kingdra (Lv. 40)',
      badge: 'Rising Badge',
      monologue: 'I am the best Dragon trainer in Johto. Even Lance respects my power!',
      themeColor: '#1565c0'
    }
  ];

  toggleMonologue = (name: string): void => {
    this.openLeader = this.openLeader === name ? '' : name;
  };
}