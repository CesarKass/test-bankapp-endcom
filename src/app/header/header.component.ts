import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Salarios:any = [];
  Gastos:number = 0;
  Ingresos:number = 0;
  SaldoGeneral:number = 0;
  constructor(private data : DataService){
    this.data.getSalary().subscribe(response =>{  
      this.Salarios = response;
      for (let index = 0; index < this.Salarios.saldos.length; index++) {  
        // console.log(this.Salarios.saldos[index]);
        this.Gastos = this.Salarios.saldos[index].gastos;
        this.Ingresos = this.Salarios.saldos[index].ingresos;
        this.SaldoGeneral = this.Salarios.saldos[index].saldoGeneral;
      }
    })
  } 

  ngOnInit(): void {
  }

}
