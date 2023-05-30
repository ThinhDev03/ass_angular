import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ServiceService) {
    this.productService.getProducts().subscribe(data => { this.products = data })
  }
  remove(id: any) {
    this.productService.deleteProducts(id).subscribe(() => {
      console.log("Xoá thành công")
      this.products = this.products.filter((product) => product
        .id != id)
    })
  }
}
