import { CustomerComponent } from './../Pages/Master-page/master-page/login/Addmin/customer/customer.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { SeatStatus } from 'src/app/Pages/Enums/SeatStatus';
import { payment } from '../Pages/Master-page/master-page/login/User/screen-order/screen-order.component';

interface ApiResponse {
  data: Genre[];
  totalItem: number;
  page: number;
}

interface Genre {
  id: number;
  name: string;
}
interface Seat {
  name: string;
  statusName: SeatStatus;
  seatId: number;
  row: number;
  col: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
 

  apiurl = 'http://pvtan0512-001-site1.ctempurl.com/api';
  setData: any;
  getData: any;
  dataEmitter: any;
  constructor(private http: HttpClient) {}
  createUserSuccess = new BehaviorSubject<boolean>(false);
  paySuccess = new BehaviorSubject<boolean>(false);

  loginService(dto: any) {
    return this.http.post(this.apiurl + '/Login/Login', dto);
  }

  // show thông tin nhân viên
  employeeService(page: number, pageSize: Number) {
    return this.http.get<any>(
      `${this.apiurl}/User?page=${page}&pageSize=${pageSize}`
    );
  }

  employeeAdd(addemp: any) {
    return this.http.post(this.apiurl + '/User', addemp);
  }
  employeeDelete(id: Number) {
    const empurl = `${this.apiurl}/User/${id}`;
    return this.http.delete(empurl);
  }

  // show thông tin khách hàng
  // trang đã chỉnh
  customerService(page: number, pageSize: number) {
    return this.http.get<any>(
      `${this.apiurl}/Customer?page=${page}&pageSize=${pageSize}`
    );
  }

  //#region Khách hàng
  CustomerAdd(add: any) {
    return this.http.post(this.apiurl + '/Customer', add);
  }

  customerDelete(id: Number): Observable<any> {
    const url = `${this.apiurl}/Customer/${id}`;
    return this.http.delete<any>(url);
  }

  //#endregion

  // #region tình trạng phòng
  RoomStatus(page: Number, pageSize: Number) {
    return this.http.get<any>(
      `${this.apiurl}/RoomStatus?page=${page}&pageSize=${pageSize}`
    );
  }
  deteteRoom(id: number): Observable<any> {
    const url = `${this.apiurl}/RoomStatus/${id}`;
    return this.http.delete<any>(url);
  }
  RoomStatusadd(dto: any) {
    return this.http.post(this.apiurl + '/RoomStatus', dto);
  }
  // #regionsuất chiếu
  getShowtime(page: Number, pageSize: Number) {
    return this.http.get<any>(
      `${this.apiurl}/ShowTime?page=${page}&pageSize=${pageSize}`
    );
  }
  addShowtime(dto: any) {
    return this.http.post(this.apiurl + '/ShowTime', dto);
  }
  DeleteShowtime(id: Number): Observable<any> {
    const url = `${this.apiurl}/ShowTime/${id}`;
    return this.http.delete<any>(url);
  }
  // seatstatus
  // getSeatStatus(page:Number,pageSize:Number):Observable<SeatStatus[][]> {
  //   return this.http.get<SeatStatus[][]>(`${this.apiurl}/SeatStatus?page=${page}&pageSize=${pageSize}`)
  // }

  getSeatList(page: number, pageSize: number): Observable<Seat[]> {
    const url = `${this.apiurl}/SeatStatus?page=${page}&pageSize=${pageSize}`;
    return this.http.get<Seat[]>(url);
  }

  updateSeatStatus(
    row: number,
    col: number,
    newStatus: SeatStatus,
    seatId: number
  ): Observable<any> {
    const payload = { row, col, status: newStatus, seatId: seatId };
    return this.http.put(`${this.apiurl}/SeatStatus/${seatId}`, payload);
  }

  // ghế

  getSeatByRoomId(showTimeId: number): Observable<any[]> {
    const url = `${this.apiurl}/ShowTime/${showTimeId}/seats`;
    return this.http.get<any[]>(url);
  }

  movieService(page: Number, pageSize: Number) {
    return this.http.get<any>(
      `${this.apiurl}/Film?page=${page}&pageSize=${pageSize}`
    );
  }

  movieAdd(movieId: any) {
    return this.http.post(this.apiurl + '/Film', movieId);
  }

  movieDelete(id: Number) {
    const movieurl = `${this.apiurl}/Film/${id}`;
    return this.http.delete(movieurl);
  }

  // droplist thể loại
  getGenre(page: number, pageSize: number): Observable<Genre[]> {
    const url = `${this.apiurl}/TypeOfFilm?page=${page
      .toString()
      .padStart(2, '0')}&pageSize=${pageSize}`;
    return this.http
      .get<ApiResponse>(url)
      .pipe(map((response: ApiResponse) => response.data));
  }
  getShowMovieById(id: number) {
    return this.http.get<any>(`${this.apiurl}/showTime/${id}`);
  }
  //Bill
  //http://pvtan0512-001-site1.ctempurl.com/api/Bill/1/tickets?page=0&pageSize=10

  getBillById(BillId: number, page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiurl}/Bill/${BillId}/tickets?page=${page}&pageSize=${pageSize}`
    );
  }

  private selectedMovie?: any;

  setPayment(selectedMovie: any) {
    this.selectedMovie = selectedMovie;
  }

  getPayment() {
    return this.selectedMovie;
  }
  postBill(dto: any) {
    return this.http.post(
      'http://pvtan0512-001-site1.ctempurl.com/api/Bill',
      dto
    );
  }
  getAllFilm() {
    return this.http.get(
      'http://pvtan0512-001-site1.ctempurl.com/api/Film?page=0&pageSize=100',
    );
  }
  getAllRoom() {
    return this.http.get(
      'http://pvtan0512-001-site1.ctempurl.com/api/Room?page=0&pageSize=100',
    );
  }
}
