import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ClimbService } from 'src/app/climb.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ResourceModalPage } from '../../../modals/resource-modal/resource-modal.page';

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {
  private climbingRouteDoc: AngularFirestoreDocument<any>;
  climbingRoute: Observable<any>;
  private routeSub: Subscription;
  private isFavorite = false;
  private routeData;
  private favoriteRoutes = [];

  private linkToFourteenersWebsite;

  private routeId;
  private routeName;
  private mountainName;

  dataReturned: any;

  

  constructor(
    private climbService: ClimbService,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: Storage,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    //this.deleteRefs()
    this.getRoute();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ResourceModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  getRoute() {
    const id = this.route.snapshot.paramMap.get('routeId');
    this.climbingRouteDoc = this.afs.doc<any>('routes/' + id);
    this.climbingRoute = this.climbingRouteDoc.valueChanges();
    this.climbingRoute.subscribe(data => {
      this.routeName = data.name;
      this.mountainName = data.mountain;
      this.linkToFourteenersWebsite = data.linkToFourteenersWebsite;
    })
    
    this.checkIfFavoriteRoute();
    //this.climbService.getMountain(id).subscribe(mountain => this.mountain = mountain);
  }

  handleBookmark() {
    if(this.isFavorite){
      //delete
      this.deleteFavoriteRoute();
    } else {
      //Add to favorite routes
      this.addFavoriteRoute();
    }
  }

  async deleteRefs() {
    await this.storage.remove('favoriteRoutes');
  }

  async addFavoriteRoute() {
    const id = this.route.snapshot.paramMap.get('routeId');
    console.log('inside addfavroute and id: ', id, ' and name: ', this.routeName);

    this.favoriteRoutes = await this.storage.get('favoriteRoutes');

    if(this.favoriteRoutes == null) {
      this.favoriteRoutes = [];
    } else {
      console.log('fav routes: ', this.favoriteRoutes);
    }

    let data = {
      name: this.routeName,
      routeId: id,
      mountainName: this.mountainName
    }

    console.log('route data: ', data);

    this.favoriteRoutes.push(data);

    

    let newResults = await this.storage.set('favoriteRoutes', this.favoriteRoutes);
    console.log('new results: ', newResults);

    this.checkIfFavoriteRoute();
  }

  async deleteFavoriteRoute() {
    try {
      let favoriteRoutes = [];
      const id = this.route.snapshot.paramMap.get('routeId');
  
      favoriteRoutes = await this.storage.get('favoriteRoutes');
  
      if(favoriteRoutes == null) {
        favoriteRoutes = [];
      }
  
      let newFavorites = favoriteRoutes.filter(favorite => {
        console.log('inside loop, favorite.routeId:', favorite.routeId, ' and id: ', id);
        return favorite.routeId != id;
      });
  
      let results = await this.storage.set('favoriteRoutes', newFavorites);
      console.log('results: ', results);
    } catch (error) {
      console.log('Error in deleteFavoriteMountain(). ', error);
    }

    this.checkIfFavoriteRoute();
  }

  async checkIfFavoriteRoute() {
    let currentFavoriteList = [];
    const id = this.route.snapshot.paramMap.get('routeId');
    console.log('check fav id: ', id);

    try {
      currentFavoriteList = await this.storage.get('favoriteRoutes');
    
      // No favorites, return false
      if(currentFavoriteList == null) {
        this.isFavorite = false;
        return false;
      } else {
        console.log('spot A: ', currentFavoriteList);

        for(let favorite of currentFavoriteList) {
          if(favorite.routeId == id){
            this.isFavorite = true;
            return true;
          }
        }
        console.log('here');
        this.isFavorite = false;
        return false;
      }
    } catch (reason) {
      console.log('Error in checkIfFavorites.', reason);
    }
  }

  navigateToFourteenerWebsite() {
    console.log('nav to 14ers called and link: ', this.linkToFourteenersWebsite);
    window.open(this.linkToFourteenersWebsite, "_blank");
  }
}
