import { DataServiceService } from 'src/app/service/data-service.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-delete-showtime',
  templateUrl: './delete-showtime.component.html',
  styleUrls: ['./delete-showtime.component.css'],
  providers: [MessageService]
})
export class DeleteShowtimeComponent {
  data:any
  constructor(private dataService: DataServiceService,  
      private dialogref: MatDialogRef<DeleteShowtimeComponent>,
      @Inject(MAT_DIALOG_DATA) data:any,private messageService: MessageService

    ) {
      console.log(data)
      this.data = data
    }

  deletecus() {
    console.log(this.data)
    this.dataService.DeleteShowtime(this.data.id).subscribe(
      (response) => {
        this.dataService.createUserSuccess.next(true);
        this.cancel()
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
        // Xử lý kết quả sau khi xóa thành công
      },
      (error) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });

        this.dataService.createUserSuccess.next(true);
        this.cancel()
          // Xử lý lỗi
      }
    );
  }
  cancel() {
    this.dialogref.close(DeleteShowtimeComponent);
  }
}
