import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

class Order {
    constructor(
        public endereco: string,
        public numero: number,
        public enderecoOpcional: string,
        public pagamentoOpcao: string,
        public listItemPedido: OrderItem[] = [],
        public id?:string
    ) { }

}

class OrderItem {
    constructor(public quantidade: number, public menu: MenuItem) { }
}

export{Order, OrderItem}