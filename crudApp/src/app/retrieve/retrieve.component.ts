import { Component, OnInit } from '@angular/core';
import { Products } from '../model/Products';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit{

  constructor(private services: ProductService){}
    products: Products[]= [];
    productId: any;
   
  ngOnInit(): void {
    this.products = this.getProducts();
    this.products = this.getProductsById(Products);
  }

  getProducts(): any{
    this.services.getProducts().subscribe((products)=>{
    this.products = products;
  });


}

getProductsById(productId: any): any{
  this.services.getProductsById(productId).subscribe((response)=>{
    this.products=response;
  },
    (error)=>{
      console.log(error);
    }
  );
}
onSubmit() {
  if (this.productId) {
    this.services.getProductsById(this.productId).subscribe(
      (product) => {
        this.products = [product];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
}
