import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {  
  }
  ismenupi: boolean =false;

  pimenu(): void{
    this.ismenupi=!this.ismenupi;
  }
}
