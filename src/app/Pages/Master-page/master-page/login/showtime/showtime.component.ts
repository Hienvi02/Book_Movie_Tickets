import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css'],
  
})

export class ShowtimeComponent {
  dataArr=[
    {
      "img":"https://metiz.vn/media/poster_film/elemental_teaser_poster_vietnam_1_.jpg",
      "tenphim":"XỨ SỞ CỦA CÁC NGUYÊN TỐ",
      "theloai": "hài",
      "thoiluong": "150",
      "khoichieu": "number 1",
      "giochieu":"15:20"
    },
    {
      "img":"https://metiz.vn/media/poster_film/conan_movie_26_-_vietnamese_poster_QEQgGDp.jpg",
      "tenphim":"CONAN",
      "theloai": "hài",
      "thoiluong": "150",
      "khoichieu": "number 2",
      "giochieu":"15:20"
    }
  ]
}
