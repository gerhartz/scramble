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
    return this.firestore.collection('mountains', ref => ref.orderBy('name')).snapshotChanges();
  }

  getMountainsByState(stateAbbreviation, orderingProperty, orderingType ) {
    return this.firestore.collection('mountains', ref => ref.where('state', '==', stateAbbreviation).orderBy(orderingProperty, orderingType)).snapshotChanges();
  }

  getMountainsByOrder(orderProperty, orderType) {
    return this.firestore.collection('mountains', ref => ref.orderBy(orderProperty, orderType)).snapshotChanges();
  }


  getMountainsByElevation() {
    return this.firestore.collection('mountains', ref => ref.orderBy('elevation', 'desc')).snapshotChanges();
  }

  getMountain(mountainId: string) {
    console.log('string id: ', mountainId);
    return this.firestore.collection('mountains').doc(mountainId).snapshotChanges();
  }

  createMountain(mountain: any) {
    return this.firestore.collection('mountains').add(mountain);
  }

  deleteMountain(mountainId: string) {
    this.firestore.doc('mountains/' + mountainId).delete();
  }


}
