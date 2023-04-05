import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from './facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Facture[]>('http://localhost:8080/facture');
  }
  create(payload: Facture) {
    return this.http.post<Facture>('http://localhost:8080/facture', payload);
  }
  getById(id: number) {
    return this.http.get<Facture>(`http://localhost:8080/facture/${id}`);
  }  
  update(payload: Facture){
    return this.http.put(`http://localhost:8080/facture`, payload);
}
delete(id:number){
  return this.http.delete<Facture>(`http://localhost:8080/facture/${id}`);
}

}
