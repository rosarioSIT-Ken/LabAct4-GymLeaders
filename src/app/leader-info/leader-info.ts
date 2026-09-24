import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GymLeader } from '../models/gym-leader';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfo {
  @Input({ required: true }) leader!: GymLeader;
  @Input() isOpen: boolean = false;
  @Output() monologueClicked = new EventEmitter<string>();

  onClick = (): void => {
    this.monologueClicked.emit(this.leader.name);
  };
}