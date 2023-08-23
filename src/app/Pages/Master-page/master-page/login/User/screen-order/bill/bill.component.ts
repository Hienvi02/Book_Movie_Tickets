import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  billDetail: any;
  constructor(private router:Router,private dataSevice:DataServiceService){}

  ngOnInit(): void {
    this.billDetail = this.dataSevice.getPayment()
    // console.log("hasjdhajksd",this.billDetail);
  }
  cancel(){
   this.router.navigate(['/paymovie'])
  }
  pay(){
    alert('Thanh Toán Thành Công')
  }
  
}
