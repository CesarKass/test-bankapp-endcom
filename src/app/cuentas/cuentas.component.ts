import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  Tarjetas:any = []; 
  constructor(private data : DataService){
    this.data.getCards().subscribe(response =>{   
      this.Tarjetas = response; 
    })
  } 

  ngOnInit(): void {
  }

 

}
