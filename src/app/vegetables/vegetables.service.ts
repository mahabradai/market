import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vegetables } from './vegetables';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {
  constructor (private http: HttpClient) {}
  get() {
    return this.http.get<Vegetables[]>('http://localhost:8080/vegetables');
  }
  create(payload: Vegetables) {
    return this.http.post<Vegetables>('http://localhost:8080/vegetables', payload);
  }
  getById(id: number) {
    return this.http.get<Vegetables>(`http://localhost:8080/vegetables/${id}`);
   }
   update(payload:Vegetables){
    return this.http.put(`http://localhost:8080/vegetables`,payload);
   }
   delete(id:number){
    return this.http.delete<Vegetables>(`http://localhost:8080/vegetables/${id}`);
 }

}
