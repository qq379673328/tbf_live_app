import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var videojs;

@IonicPage()
@Component({
  selector: 'page-video-http',
  templateUrl: 'video-http.html',
})
export class VideoHttpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let myPlayer = videojs('my-video-play');

    myPlayer.ready(function () {
      myPlayer.play();
    });
  }

}
