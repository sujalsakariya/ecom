import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [];
  slideUrl: string = 'https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1300/v1/i/287f132e_c09a.jpg';
  constructor() { }
  slides = [
    { img: 'https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1300/v1/i/c9a5ffc8_016f.jpg',
      title: 'People Are Talking',
      text: '“Just buy it. This is honestly the best T-shirt I own. I now have most of the colors.”',
      foot:'–Bhollsten, The Premium-Weight Relaxed Crew',
     },
    { img: 'https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1300/v1/i/0125813f_9f02.jpg',
      title: 'People Are Talking',
      text: '“I strongly recommend the chinos I bought: sleek, travel well (even when rolled, very few creases), and they just look classy.”',
      foot:'–RPaez, The Performance Chino',
     },
    { img: 'https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1300/v1/i/52962a55_d079.jpg',
      title: 'People Are Talking',
      text: '“The fit is really a flattering slim fit. It doesn’t cling to the body and hugs in just the right places. The fabric is breathable and soft. It washes well and doesnt shrink or fade. Overall, it’s a great quality shirt.”',
      foot:'–CityMomma, The Pique Polo'
     },
    { img: 'https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1300/v1/i/eb6e419a_5d14.jpg',
      title: 'People Are Talking',
      text: '“Well-worn feeling straight out of the packet, great weight, color, and cut all combine for the perfect pair.”',
      foot:'–Debo10, The Relaxed 4-Way Stretch Organic Jean',
    },
    { img: 'https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1300/v1/i/d6f7de2c_c161.jpg',
      title: 'People Are Talking',
      text: '“I think it can be dressed up, or dressed down. And I dont see why you couldnt wear this as a base layer year-round as well. Excellent essential wardrobe purchase.”',
      foot:'–Justin R., The Relaxed Linen Short-Sleeve Shirt',
     },
  ];

  currentIndex = 0;

  ngOnInit(): void {
    // You can initialize or fetch the products here
  }
  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
  }

  next(): void {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
  }



  currentRating: number = 0;

  rate(value: number) {
    if (this.currentRating === value) {
      this.currentRating = 0; // Deselect the star if it's already selected
    } else {
      this.currentRating = value; // Select the star if it's not selected
    }
  }
}
