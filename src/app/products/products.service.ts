import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Products } from './products-model';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http:HttpClient) { }

  url:string= "http://134.122.53.44/products"
  prodId: any;

  getProducts() {
    return this.http.get(this.url + "/products" );

  } 
  postProducts(productitems: Products) {
    return this.http.post(this.url + "/products", productitems);

  }

  getProduct(id: any) {
    return this.http.get(this.url + id)
  }

  putProduct(id:any, productitems: Products) {
    return this.http.put(`${this.url}/${id}`, productitems)
  }
  
}
