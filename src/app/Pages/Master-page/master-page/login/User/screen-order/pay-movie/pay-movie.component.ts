import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pay-movie',
  templateUrl: './pay-movie.component.html',
  styleUrls: ['./pay-movie.component.css'],
})
export class PayMovieComponent implements OnInit {
  product: any;
  billDetail: any;
  price = 50000;
  messageService: any;
  ngOnInit(): void {
    this.getDetailMovieById();
  }
  data: any;
  constructor(
    private router: Router,
    private dataSevice: DataServiceService,
    public MatDialogRef: MatDialogRef<PayMovieComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.data = data;
  }
  cancel() {
    this.MatDialogRef.close(PayMovieComponent);

  }
  pay() {
    const myDate = new Date();
    let ticketBuilders: { seatId: any; showTimeId: any }[] = [];
    this.data.data.forEach((element: any) => {
      ticketBuilders.push({
        seatId: element.id,
        showTimeId: this.data.movieId,
      });
    });
    const dto: any = {
      createDate: myDate,
      userId: localStorage.getItem('userId'),
      ticketBuilders: ticketBuilders,
    };
    this.dataSevice.postBill(dto).subscribe((value) => { 
      this.cancel()
      this.dataSevice.paySuccess.next(true);

    });
    this.cancel()
  }
  ticket: any[] = []; // biến dẫn lưu danh sách vé
  getDetailMovieById() {
    const billId = 1;
    const page = 0;
    const pageSize = 99;

    this.dataSevice.getBillById(billId, page, pageSize).subscribe(
      (tickets) => {
        this.ticket = tickets.data;
        console.log(tickets);
      },
      (error) => {
        console.error('Lỗi khi gọi API:', error);
      }
    );
  }
}
