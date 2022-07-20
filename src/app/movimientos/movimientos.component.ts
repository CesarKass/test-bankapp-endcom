import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  Movimientos:any = []; 
  constructor(private data : DataService){
    this.data.getMov().subscribe(response =>{   
      this.Movimientos = response;
    })
  } 

  ngOnInit(): void {
  }

}
