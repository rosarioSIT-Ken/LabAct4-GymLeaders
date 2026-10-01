import { Component } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  pageTitle: string = 'The Regions of Kanto, Johto, and Hoenn';
}

