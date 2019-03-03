import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService
      .reviewOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe(returnApi => this.reviews = returnApi.value)
  }

}
