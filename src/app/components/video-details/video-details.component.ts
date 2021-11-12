import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  currentVideo: Video = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getVideo(this.route.snapshot.params.id);
  }

  getVideo(id: string): void {
    this.videoService.get(id)
      .subscribe(
        data => {
          this.currentVideo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentVideo.title,
      description: this.currentVideo.description,
      published: status
    };

    this.message = '';

    this.videoService.update(this.currentVideo.id, data)
      .subscribe(
        response => {
          this.currentVideo.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateVideo(): void {
    this.message = '';

    this.videoService.update(this.currentVideo.id, this.currentVideo)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This video was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteVideo(): void {
    this.videoService.delete(this.currentVideo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/videos']);
        },
        error => {
          console.log(error);
        });
  }

}
