import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClimbService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getMountains() {
    return this.firestore.collection('mountains').snapshotChanges();
  }

  createMountain(mountain: any) {
    return this.firestore.collection('mountains').add(mountain);
  }

  deleteMountain(mountainId: string) {
    this.firestore.doc('mountains/' + mountainId).delete();
  }


}
