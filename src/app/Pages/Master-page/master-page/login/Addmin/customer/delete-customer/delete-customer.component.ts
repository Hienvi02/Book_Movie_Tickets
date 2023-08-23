import { DataServiceService } from 'src/app/service/data-service.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css'],
})
export class DeleteCustomerComponent {
  data:any
  constructor(private dataService: DataServiceService,  
      private dialogref: MatDialogRef<DeleteCustomerComponent>,
      @Inject(MAT_DIALOG_DATA) data:any

    ) {
      console.log(data)
      this.data = data
    }

  deletecus() {
    console.log(this.data)
    this.dataService.customerDelete(this.data.id).subscribe(
      (response) => {
        // this.openSuccessDialog();
        this.dataService.createUserSuccess.next(true);
        this.cancel()
        alert('Đã Xóa Thành Công');
        // Xử lý kết quả sau khi xóa thành công
      },
      (error) => {
        this.dataService.createUserSuccess.next(true);
        this.cancel()
        alert('Đã Xóa Thành Công');        // Xử lý lỗi
      }
    );
  }
  cancel() {
    this.dialogref.close(DeleteCustomerComponent);
  }
}
