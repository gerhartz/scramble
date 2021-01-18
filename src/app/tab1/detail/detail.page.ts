import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ClimbService } from 'src/app/climb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private mountainDoc: AngularFirestoreDocument<any>;
  mountain: Observable<any>;
  private routeSub: Subscription;
  routeList: Observable<any>;

  

  constructor(
    private climbService: ClimbService,
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getMountain();
  }

  getMountain() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mountainDoc = this.afs.doc<any>('mountains/' + id);
    this.mountain = this.mountainDoc.valueChanges();
    this.routeList = this.afs.doc<any>('mountains/' + id).collection('routes').valueChanges();
    //this.climbService.getMountain(id).subscribe(mountain => this.mountain = mountain);
  }

  saveMountain() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('savem ountain called, id: ', id);
  }

}
