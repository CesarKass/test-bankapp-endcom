import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http: HttpClient) {
    console.log('service');
    
  }

  getAccount(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/cuenta')
  }

  getSalary(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/saldos')
  }

  getCards(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/tarjetas')
  }

  getMov(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/movimientos')
  }

}
