import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  
  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap('Three Rock Mountain', 'Un endroit magnifique pour les rendonnées.',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 1500, "Paris"),

      new FaceSnap('Archibald', 'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 20, "la montagne"),

      new FaceSnap('Un bon repos', 'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06//HEALTHYFRESH.jpg', new Date(), 0),
        new FaceSnap('Three Rock Mountain', 'Un endroit magnifique pour les rendonnées.',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(),100, "Paris"),

      new FaceSnap('Archibald', 'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 75, "la montagne"),

      new FaceSnap('Un bon repos', 'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06//HEALTHYFRESH.jpg', new Date(), 0)
    ]
  }
}
