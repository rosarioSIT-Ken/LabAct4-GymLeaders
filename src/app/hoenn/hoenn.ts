import { Component, inject } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { HoennLeadersService } from '../services/hoenn-leaders.service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css'
})
export class Hoenn {
  private hoennService = inject(HoennLeadersService);

  // All data and state come from the service, not the component
  regionName = this.hoennService.regionName;
  regionColor = this.hoennService.regionColor;
  leaders = this.hoennService.leaders;
  openLeader = this.hoennService.activeLeader;

  toggleMonologue = (name: string): void => {
    this.hoennService.toggleMonologue(name);
  };
}
