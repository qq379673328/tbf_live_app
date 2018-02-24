import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoHttpPage } from './video-http';

@NgModule({
  declarations: [
    VideoHttpPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoHttpPage),
  ],
})
export class VideoHttpPageModule {}
