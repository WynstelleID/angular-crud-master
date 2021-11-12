import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video: Video = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

  saveVideo(): void {
    const data = {
      title: this.video.title,
      description: this.video.description
    };

    this.videoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newVideo(): void {
    this.submitted = false;
    this.video = {
      title: '',
      description: '',
      published: false
    };
  }

}
