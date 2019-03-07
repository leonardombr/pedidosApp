import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: any 

  constructor(private restaurantService: RestaurantsService,
              private router: ActivatedRoute,
              private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.restaurantService.menuOfRestaurant(this.router.parent.snapshot.params['id'])
    .subscribe(returnApi => this.menu = returnApi.value)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)        
  }

}
