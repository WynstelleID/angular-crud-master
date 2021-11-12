import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos?: Video[];
  currentVideo: Video = {};
  currentIndex = -1;
  title = '';

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.retrieveVideos();
  }

  retrieveVideos(): void {
    this.videoService.getAll()
      .subscribe(
        data => {
          this.videos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveVideos();
    this.currentVideo = {};
    this.currentIndex = -1;
  }

  setActiveVideo(video: Video, index: number): void {
    this.currentVideo = video;
    this.currentIndex = index;
  }

  removeAllVideos(): void {
    this.videoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentVideo = {};
    this.currentIndex = -1;

    this.videoService.findByTitle(this.title)
      .subscribe(
        data => {
          this.videos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
