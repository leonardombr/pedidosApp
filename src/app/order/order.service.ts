import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from "app/app.api";
import { ReturnApi } from "app/shared/returnApi.model";

@Injectable()
export class OrderService{
    
    constructor(private cartService: ShoppingCartService, private http: HttpClient){

    }

    itemsValue(): number{
        return this.cartService.total()
    }

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decrementQty(item: CartItem){
        this.cartService.decrementQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    clear(){
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<ReturnApi>{        
        return this.http.post<ReturnApi>(`${MEAT_API}/pedido/salvar`, order)
                        .map(returnApi => returnApi)
    }
}