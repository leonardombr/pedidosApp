import { Restaurant } from "app/restaurants/restaurant/restaurant.model";

export interface MenuItem{
    id: number
    imagePath: string
    nome: string
    descricao:string
    preco: number
    restaurante: Restaurant
}