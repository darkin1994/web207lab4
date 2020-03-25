import {Component, OnInit} from '@angular/core';
import {Product} from '../Product';
import {Router} from '@angular/router';
// @ts-ignore
import {ProductServiceService} from '../Service/product-service.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  data: Product[];
  new: Product;
  // tslint:disable-next-line:variable-name
  private service: ProductServiceService;

  // tslint:disable-next-line:variable-name
  constructor(private _service: ProductServiceService, private router: Router) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct(): void {
    this.service.getListProduct().subscribe(data => {
      this.data = data;
    });

  }
  deleteproduct(id): void {
     this._service.deleteProduct(id).subscribe(value => { this.getproduct(); }, error => { console.log(error); });
  }
  getid(id): void {
    this.router.navigate(['/Edit', id]);
  }
  detail(id): void {
    this.router.navigate(['/Detail', id]);
  }
  add(): void {
    this.router.navigate(['/Add']);
  }
}
