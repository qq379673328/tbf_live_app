import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoHlsPage } from './video-hls';

@NgModule({
  declarations: [
    VideoHlsPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoHlsPage),
  ],
})
export class VideoHlsPageModule {}
