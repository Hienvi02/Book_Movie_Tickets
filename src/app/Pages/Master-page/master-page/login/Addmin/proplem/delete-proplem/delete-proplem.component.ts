import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/service/data-service.service';
import { DeleteCustomerComponent } from '../../customer/delete-customer/delete-customer.component';


@Component({
  selector: 'app-delete-proplem',
  templateUrl: './delete-proplem.component.html',
  styleUrls: ['./delete-proplem.component.css']
})

export class DeleteProplemComponent {
  
  data:any
  constructor(private dataService: DataServiceService,  
      private dialogref: MatDialogRef<DeleteCustomerComponent>,
      @Inject(MAT_DIALOG_DATA) data:any

    ) {
      console.log(data)
      this.data = data
    }
  deleteemp() {
    console.log(this.data)
    this.dataService.deteteRoom(this.data.id).subscribe(
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
