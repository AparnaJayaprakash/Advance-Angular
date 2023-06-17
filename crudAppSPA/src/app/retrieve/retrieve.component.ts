import { Component, OnInit } from '@angular/core';
import { Products } from '../model/Products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit{

  products: Products[]= [];
  productId: number=0;

  constructor(private services: ProductService){}
  
  
ngOnInit(): void {
  this.products = this.getProducts();
  //this.products = this.getProductsById(Products);
}

getProducts(): any{
  this.services.getProducts().subscribe((products)=>{
  this.products = products;
});
}

// updateProduct() {
//   throw new Error('Method not implemented.');
//   }

  deleteProduct(id: number): void{
    this.services.deleteProduct(id).subscribe(
      (response) => {
        console.log('Product deleted successfully:');
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    );
  }

}



// getProductsById(productId: any): any{
// this.services.getProductsById(productId).subscribe((response)=>{
//   this.products=response;
// },
//   (error)=>{
//     console.log(error);
//   }
// );
// }
// onSubmit() {
// if (this.productId) {
//   this.services.getProductsById(this.productId).subscribe(
//     (product) => {
//       this.products = [product];
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }
// }


