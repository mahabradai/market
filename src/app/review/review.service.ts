import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Review[]>('http://localhost:8080/review');
  }
  create(payload: Review) {
    return this.http.post<Review>('http://localhost:8080/review', payload);
  }
  getById(id: number) {
    return this.http.get<Review>(`http://localhost:8080/review/${id}`);
  }  
  update(payload: Review){
    return this.http.put(`http://localhost:8080/review`, payload);
  }
  delete(id:number){
    return this.http.delete<Review>(`http://localhost:8080/review/${id}`);
  }
}
