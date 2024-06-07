import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcquaparkService {

  constructor(private http : HttpClient) { }

  giostreVicine(lng : number, lat : number, dist : number ){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer my-token'
    });
    return this.http.get(`http://localhost:8080/api/giostra/rangeGiostre?lng=${lng}&lat=${lat}&dist=${dist}`,{headers});
  }
}
