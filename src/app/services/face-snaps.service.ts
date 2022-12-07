import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(1, 'Three Rocks Mountain', 'Un endroit magnifique pour les rendonnées.',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 1500, "Paris"),

    new FaceSnap(2, 'Archibald', 'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 20, "la montagne"),

    new FaceSnap(3, 'Un bon repos', 'Mmmh que c\'est bon !',
      'https://wtop.com/wp-content/uploads/2020/06//HEALTHYFRESH.jpg', new Date(), 0),
    
    new FaceSnap(4, 'Three Rock Mountain', 'Un endroit magnifique pour les rendonnées.',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(),100, "Paris"),

    new FaceSnap(5, 'Archibald', 'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 75, "la montagne"),

    new FaceSnap(6, 'Un bon repos', 'Mmmh que c\'est bon !',
      'https://wtop.com/wp-content/uploads/2020/06//HEALTHYFRESH.jpg', new Date(), 0)
  ]

  constructor() { }

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(faceSnap){
      return faceSnap;
    } else {
      throw new Error("FaceSnap not found !");
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    /*if(snapType === 'snap') {
      faceSnap.snaps++
    } else {
      faceSnap.snaps--
    }*/
  }

/*  snapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(faceSnap){
      faceSnap.snaps++;
    } else {
      throw new Error("FaceSnap not found !");
    }
  }

  unsnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(faceSnap){
      faceSnap.snaps--;
    } else {
      throw new Error("FaceSnap not found !");
    }
  }*/
}
