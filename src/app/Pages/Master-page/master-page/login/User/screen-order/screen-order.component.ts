import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { OrdermovieComponent } from '../ordermovie/ordermovie.component';
import { SeatStatus } from 'src/app/Pages/Enums/SeatStatus';
import { UpdatecusComponent } from '../../Addmin/customer/updatecus/updatecus.component';
import { ActivatedRoute, Router } from '@angular/router';
import { outputAst } from '@angular/compiler';
import { Seat } from 'src/app/Model/Seat/Seat';
import { PayMovieComponent } from './pay-movie/pay-movie.component';

export interface payment {
  name: string;
  date: Date;
  session: string;
  theater: string;
  seat: string;
  ticketPrice: string;
  total: string;
}

@Component({
  selector: 'app-screen-order',
  templateUrl: './screen-order.component.html',
  styleUrls: ['./screen-order.component.css'],
})
export class ScreenOrderComponent implements OnInit {
  seats: Seat[] = [];
  user: any = [];
  seat: any[] = [];
  seatList: any[] = [];
  dataShowTime: number = 0;
  item: any;
  newItemEvent: any;
  dataDetail: any;
  ngOnInit(): void {
    this.dataService.getSeatList(0, 999).subscribe(
      (seats) => {
        this.seats = seats;
      },
      (error) => {
        console.error('Lỗi khi gọi data:', error);
      }
    );
    this.getParams();
    this.getDetailMovieById();
    this.getListSeatById();
    this.dataService.paySuccess.subscribe((value) => {
      if (value) {
        this.seatSelected.forEach((element) => {
          if (element.status == SeatStatus.Selected) {
            element.status = SeatStatus.Booked;
          }
        });
        this.seatSelected = [];
      }
    });
  }

  constructor(
    private dataService: DataServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _dialog: MatDialog
  ) {}

  priceTotal: number = 0;
  SeatsCount: number = 0;
  seatSelected: any[] = [];
  price = 50000;
  clickseat(seat: any) {
    if (
      seat.status == SeatStatus.Booked ||
      seat.stauts == SeatStatus.Unavailable
    ) {
      return;
    }
    if (seat.status === SeatStatus.Empty) {
      seat.status = SeatStatus.Selected;
      this.seatSelected.push(seat);
    } else if (seat.status === SeatStatus.Selected) {
      seat.status = SeatStatus.Empty;
      this.seatSelected = this.seatSelected.filter((item) => item !== seat);
    }
  }

  getSeatName(rowIndex: number) {
    return String.fromCharCode('A'.charCodeAt(0) + rowIndex);
  }
  // get sstatus

  classlist: any;
  getStatusSeat(seatStatus: any): any {
    switch (seatStatus) {
      case SeatStatus.Booked: {
        return 'blocked';
      }
      case SeatStatus.Empty: {
        return 'empty';
      }
      case SeatStatus.Unavailable: {
        return 'unavailable';
      }
      case SeatStatus.Selected:
        return 'selected';
    }
  }
  idParams: any;
  getParams() {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.idParams = res.id;
    });
  }

  // dataDetail: any;
  //Hiển thị chi tiết phim
  getDetailMovieById() {
    this.dataService.getShowMovieById(this.idParams).subscribe((res) => {
      this.dataDetail = res;
    });
  }
  // khởi tạo trạng thía ban đầu cho ghế
  getListSeatById() {
    this.dataService.getSeatByRoomId(this.idParams).subscribe((res: any) => {
      console.log(res.columnSeats);
      res.columnSeats.map((res: any) => {
        res.seatOfShowTimes.map((item: any) => {
          /* this.seatList = item; */
          this.seatList.push(item);
        });
      });
    });
  }

  // bill
  skip() {
    if (this.seatSelected.length) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        data: this.seatSelected,
        movieId: this.idParams,
        movieDetail: this.dataDetail,
      };
      this._dialog.open(PayMovieComponent, dialogConfig);
    }
  }
}

//#region
