import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from "./restaurant/restaurant.model";

import { MEAT_API } from "../app.api";
import { ReturnApi } from "app/shared/returnApi.model";


@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  /*restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurante/listar`)
  }*/

  restaurants(): Observable<ReturnApi> {       
      return this.http.get<ReturnApi>(`${MEAT_API}/restaurante/listar`)
  }

  restaurantById(id: string): Observable<ReturnApi> {
    return this.http.get<ReturnApi>(`${MEAT_API}/restaurante/${id}`)
  }

  reviewOfRestaurant(id: string): Observable<ReturnApi>{
    return this.http.get(`${MEAT_API}/restaurante/${id}/avaliacao`)
  }

  menuOfRestaurant(id: string): Observable<ReturnApi>{
    return this.http.get<ReturnApi>(`${MEAT_API}/restaurante/${id}/menu`)
  }
}