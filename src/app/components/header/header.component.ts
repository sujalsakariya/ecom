import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router'; // Correct import

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slider', [
      state('left', style({
        transform: 'translateX(0%)'
      })),
      state('right', style({
        transform: 'translateX(100%)'
      })),
      transition('left <=> right', animate('0.3s ease-in-out')),
    ])
  ]
})
export class HeaderComponent {
  logoUrl: string = 'https://i.ibb.co/FHY5w9v/file.png';
  sliderState: string = 'left'; // Initial state

  toggleSlider() {
    this.sliderState = (this.sliderState === 'left') ? 'right' : 'left';
  }

  constructor(private router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
