import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  productId: any=0;

  constructor(private service:ProductService){}
  ngOnInit(): void {
    
  }

  deleteProduct(): void {
    this.service.deleteProduct(this.productId).subscribe(
      () => {
        console.log('Product deleted successfully:', this.productId);
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    );
  }




}
