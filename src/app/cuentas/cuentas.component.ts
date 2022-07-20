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

  inputNumeroTarjeta:any;
  inputCuenta:any;
  inputIssuer:any;
  inputNombreTarjeta:any;
  inputMarca:any;
  inputEstatus:any;
  inputSaldo:any;
  inputTipoCuenta:any;

  btnAgregarTarjeta (){ 
    if(
      this.inputNumeroTarjeta  == undefined ||
      this.inputCuenta  == undefined ||
      this.inputIssuer  == undefined ||
      this.inputNombreTarjeta  == undefined ||
      this.inputMarca  == undefined ||
      this.inputEstatus  == undefined ||
      this.inputSaldo  == undefined ||
      this.inputTipoCuenta == undefined 
      ){
        alert('rellene todos los campos');
    }else{
      var Obj = {
        'inputNumeroTarjeta': this.inputNumeroTarjeta,
        'inputCuenta': this.inputCuenta,
        'inputIssuer': this.inputIssuer,
        'inputNombreTarjeta': this.inputNombreTarjeta,
        'inputMarca': this.inputMarca,
        'inputEstatus': this.inputEstatus,
        'inputSaldo': this.inputSaldo,
        'inputTipoCuenta': this.inputTipoCuenta
        };
         
        alert(Obj);
        console.log(Obj);

        this.inputNumeroTarjeta  = '';
        this.inputCuenta  = '';
        this.inputIssuer  = '';
        this.inputNombreTarjeta  = '';
        this.inputMarca  = '';
        this.inputEstatus  = '';
        this.inputSaldo  = '';
        this.inputTipoCuenta = '';
    }

    return 0;
  }

}
