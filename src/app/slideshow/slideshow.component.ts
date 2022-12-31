import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass']
})
export class SlideshowComponent implements OnInit {
  images = ['ets2_20210524_235109_00.png', 'ets2_20221228_033223_00.png', 'ets2_20221228_033311_00.png'];
  headlines = ['Transporte aller Art für ETS2', 'Wir findne für jeden Job den passenden Trailer', 'Pünktlich und zuverlässig sind unsere stärken']
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {
      this.currentImage++
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1)

    }, 8000);

  }
}
