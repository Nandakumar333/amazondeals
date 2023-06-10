import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any[] = [];
  constructor(private productService: ProductService){
  }

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct(){
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.productList = result.data;
    });
  }
}
