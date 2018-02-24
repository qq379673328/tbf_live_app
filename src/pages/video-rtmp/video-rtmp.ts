import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var videojs;

@IonicPage()
@Component({
  selector: 'page-video-rtmp',
  templateUrl: 'video-rtmp.html',
})
export class VideoRtmpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let myPlayer = videojs('my-video-play');

    myPlayer.ready(function () {
      myPlayer.play();
    });
  }

}
