import {Injectable} from '@angular/core';
import {Product} from '../Product';
import {ListProduct} from '../ListProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  api = 'https://5e7aa9d40e0463001633237a.mockapi.io/product';
  products = ListProduct;
  constructor(
    private http: HttpClient
  ) {
  }

  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  deleteProduct(id) {
    return this.http.delete(`${this.api}/${id}`);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  insertProduct(product: Product) {
    return this.http.post<Product>(`${this.api}`, product);
  }
  // @ts-ignore
  getbyID = (id: number) => {
    // tslint:disable-next-line:no-shadowed-variable
    return this.http.get<Product>(`${this.api}/${id}`);
  }
}
