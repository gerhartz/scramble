import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ClimbService } from 'src/app/climb.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {
  private climbingRouteDoc: AngularFirestoreDocument<any>;
  climbingRoute: Observable<any>;
  private routeSub: Subscription;

  

  constructor(
    private climbService: ClimbService,
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getRoute();
  }

  getRoute() {
    const id = this.route.snapshot.paramMap.get('routeId');
    this.climbingRouteDoc = this.afs.doc<any>('routes/' + id);
    this.climbingRoute = this.climbingRouteDoc.valueChanges();
    //this.climbService.getMountain(id).subscribe(mountain => this.mountain = mountain);
  }
}
