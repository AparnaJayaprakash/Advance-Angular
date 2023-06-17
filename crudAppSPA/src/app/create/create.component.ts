import { Component } from '@angular/core';

import { Products } from '../model/Products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product:Products=new Products();
 
constructor(private productService:ProductService){
 
}

ngOnInit():void{

}
onSubmit(){
  this.saveProduct();
  console.log(this.product);
  
}
  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(data=>{
      console.log(data);
    },
      error=>console.log(error));
  }

}
