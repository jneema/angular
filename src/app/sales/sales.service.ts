import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sales } from './salesinterface';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }
  url:string= "http://localhost:8000"

  postSales(salesitems: Sales) {
    return this.http.post(this.url + "/sales/sales", salesitems);
  }
}
