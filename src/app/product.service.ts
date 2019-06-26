import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './iproduct';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "/assets/data/product.json";

  
  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
  }

}
