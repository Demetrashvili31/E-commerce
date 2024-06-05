import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
 


  getProducts(limit: number = 0): Observable<any> {

    return this.http.get<any>(`https://dummyjson.com/products?limit=${limit}`);
  }

}


