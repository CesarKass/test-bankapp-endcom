import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  Cuenta:any = [];
  constructor(private data : DataService){
    this.data.getAccount().subscribe(response =>{  
      this.Cuenta = response;
    })
  } 

  ngOnInit(): void {
  }

}
