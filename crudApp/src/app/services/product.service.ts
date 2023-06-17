import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from 'src/app/model/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  baseURL = "http://localhost:8090/product/api.2.0/retrieve";
  baseURL1 = "http://localhost:8090/product/api.2.0/delete";

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get<Products[]>("http://localhost:8090/product/api.2.0/retrieve/all");
  }

  saveProduct(product:Products):Observable<Object>{
    return this.http.post("http://localhost:8090/product/api.2.0/create",product);
  }

  getProductsById(productId: number): Observable<any>{
    return this.http.get<Products>(`${this.baseURL}/${productId}`);
  }

  updatedProduct(product: Products): Observable<Object>{
    return this.http.put("http://localhost:8090/product/api.2.0/update",product);
  }

  deleteProduct(productId: number): Observable<Object>{
    return this.http.delete(`${this.baseURL1}/${productId}`);
  }

}

