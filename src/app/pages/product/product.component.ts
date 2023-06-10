import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  productid:any;
  productDetails:any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService){}
  ngOnInit():void{
    this.productid = this.activatedRoute.snapshot.paramMap.get('id');    
    this.getProductDetails(this.productid);
  }

  getProductDetails(id:any){
    let productList:any[]=[];
    this.productService.getAllProducts().subscribe((result:any)=>{
      this.productDetails = result.data.find((x:any) => String(x.productId) == id);
    });
  }

}
