import { Component, OnInit } from '@angular/core';
import { Products } from '../model/Products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  constructor(private services: ProductService){}
  product: any = {};
  productId= 0;
  ngOnInit(): void {
   
  }

  retrieveProductId(){
    this.services.getProductsById(this.productId).subscribe(
      data => {
        this.product = data;
        console.log('Product updated successfully:',data);
      },
      error => {
        console.log('Error updating product:', error);
      }
    );
  }

  updatedProduct(): void{
    this.services.saveProduct(this.product).subscribe(
      (response)=> {
        console.log('Product updated successfully:',this.product);
      },
      (error) => {
        console.log('Error updating product:',error);
      }
    );
  }

}
