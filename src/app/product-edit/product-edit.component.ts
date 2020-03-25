import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductServiceService} from '../Service/product-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  edit: Product;
  private service: ProductServiceService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ProductServiceService, private activatedRoute: ActivatedRoute) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this._service.getbyID(id).subscribe(data => {
        this.edit = data;
      });
    });
  }
  Update(product: Product) {
    this._service.updateProduct(product).subscribe(value =>{
      console.log(value);
    });
  }
}
