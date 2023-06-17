import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../model/Products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private services: ProductService, private route: ActivatedRoute, private router: Router){}
  product: any = {};
  productId= 0;
  products: Products[]= [];
  ngOnInit(): void {

  const productIdParam = this.route.snapshot.paramMap.get('productId');
  this.productId = productIdParam? + productIdParam : 0;
  this.retrieveProductId();
   
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

getProductsById(productId: any): any{
 this.services.getProductsById(productId).subscribe((response)=>{
   this.products=response;
 },
   (error)=>{
     console.log(error);
   }
 );
}



  

}
