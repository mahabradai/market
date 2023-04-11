import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Qualitycontrol } from './qualitycontrol';

@Injectable({
  providedIn: 'root'
})
export class QualitycontrolService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Qualitycontrol[]>('http://localhost:8080/qualitycontrol');
  }
  create(payload: Qualitycontrol) {
    return this.http.post<Qualitycontrol>('http://localhost:8080/qualitycontrol', payload);
  }
  getById(id: number) {
    return this.http.get<Qualitycontrol>(`http://localhost:8080/qualitycontrol/${id}`);
  }  
  update(payload: Qualitycontrol){
    return this.http.put(`http://localhost:8080/qualitycontrol`, payload);
}
delete(id:number){
  return this.http.delete<Qualitycontrol>(`http://localhost:8080/qualitycontrol/${id}`);
}

}