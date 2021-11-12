import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { AddVideoComponent } from './components/add-video/add-video.component';

const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: 'videos', component: VideosListComponent },
  { path: 'videos/:id', component: VideoDetailsComponent },
  { path: 'add', component: AddVideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
