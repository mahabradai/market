import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruits } from './fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  constructor (private http: HttpClient) {}
  get() {
    return this.http.get<Fruits[]>('http://localhost:8080/fruits');
  }
  create(payload: Fruits) {
    return this.http.post<Fruits>('http://localhost:8080/fruits', payload);
  }
  getById(id: number) {
    return this.http.get<Fruits>(`http://localhost:8080/fruits/${id}`);
   }
   update(payload:Fruits){
    return this.http.put(`http://localhost:8080/fruits`,payload);
   }
   delete(id:number){
    return this.http.delete<Fruits>(`http://localhost:8080/fruits/${id}`);
 }

}
