import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/massages/notification.service";

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = this.getSession() || []

    //items: CartItem[] = []

    constructor(private notificationService: NotificationService){
               
    }

    clear() {
        this.items = []
        this.setSession(this.items)
    }

    addItem(item: MenuItem){
        let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
            this.setSession(this.items)
        }
        this.notificationService.notify(`Você adicionou o item ${item.nome}, Clique no carrinho para finalizar o pedido!`)       
    } 

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
        this.setSession(this.items)
    }

    decrementQty(item: CartItem){
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
            return
        }
        this.setSession(this.items)
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.nome}`)
        this.setSession(this.items)
    }

    total(): number {
        /*return this.items.map((item) => item.value())
            .reduce((prev, value) => prev + value, 0)*/
        return this.getSession().map(item => item.menuItem.preco * item.quantity)
            .reduce((prev, value) => prev + value, 0)
    }

    private setSession(cartItens: CartItem[]){
        sessionStorage.setItem('carrinho', JSON.stringify(cartItens))
    }

    private getSession(){
        return JSON.parse(sessionStorage.getItem('carrinho'));
    }

}