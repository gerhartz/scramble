import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ClimbService } from 'src/app/climb.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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
  isFavorite: boolean = false; //Whether the user has already favorited this
  isCompleted: boolean = false; //Whether the user has marked this mountain as completed
  
  mountainName;
  mountainElevation;
  resources: any;
  guidebooks: any;
  hasRouteClass: any[];
  range: any;
  profileUrl;
  thumbnailUrl: any;


  

  constructor(
    private climbService: ClimbService,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: Storage,
    private fireStorage: AngularFireStorage,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getMountain();
    this.checkIfMountainIsFavorite();
    this.checkIfMountainIsCompleted();
    
  }

  getImage(imageUrl) {
    const ref = this.fireStorage.ref(imageUrl);
    this.profileUrl = ref.getDownloadURL();
  }

  async clearFavorites() {
    let results = this.storage.remove('favoriteMountains');
  }

  async clearCompleted() {
    await this.storage.remove('completedMountains');
  }

  async checkIfMountainIsFavorite() {
    const id = this.route.snapshot.paramMap.get('id');
    let favoriteMountains = [];

    try {
      favoriteMountains = await this.storage.get('favoriteMountains');
    
      // No favorites, return false
      if(favoriteMountains == null) {
        this.isFavorite = false;
        return false;
      } else {

        for(let favorite of favoriteMountains) {
          if(favorite.mountainId == id){
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

  async checkIfMountainIsCompleted() {
    const id = this.route.snapshot.paramMap.get('id');
    let completedMountains = [];

    try {
      completedMountains = await this.storage.get('completedMountains');
    
      // No favorites, return false
      if(completedMountains == null) {
        this.isCompleted = false;
        return false;
      } else {
        for(let mountain of completedMountains) {
          if(mountain.mountainId == id){
            this.isCompleted = true;
            return true;
          }
        }

        this.isCompleted = false;
        return false;

      }
    } catch (reason) {
      console.log('Error in checkIfFavorites.', reason);
    }
  }

  // Checks if current mountain is in User's local storage list of favorites based on ID
  // Sets the isFavorite flag
  async checkIfFavorite() {
    const id = this.route.snapshot.paramMap.get('id');
    let favoriteMountains = [];

    try {
      favoriteMountains = await this.storage.get('favoriteMountains');
    
      // No favorites, return false
      if(favoriteMountains == null) {
        this.isFavorite = false;
        return false;
      } else {
        if(favoriteMountains[id] != undefined){
          this.isFavorite = true;
          return true;
        } else {
          this.isFavorite = false;
          return false;   // No match found
        }
      }
    } catch (reason) {
      console.log('Error in checkIfFavorites.', reason);
    }
  }

  getMountain() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mountainDoc = this.afs.doc<any>('mountains/' + id);
    this.mountain = this.mountainDoc.valueChanges();
    this.mountain.subscribe(data => {
      this.mountainName = data.name;
      this.mountainElevation = data.elevation;
      this.resources = data.resources;
      this.hasRouteClass = data.hasRouteClass;
      this.range = data.range;
      this.thumbnailUrl = data.thumbnailUrl;
    });

    this.routeList = this.afs.doc<any>('mountains/' + id).collection('routes').valueChanges();
    this.resources = this.afs.doc<any>('mountains/' + id).collection('resources').valueChanges();
    this.guidebooks = this.afs.doc<any>('mountains/' + id).collection('guidebooks').valueChanges();
  }

  
  handleBookmark() {
    if(this.isFavorite) {
      this.deleteFavoriteMountain();
    } else {
      this.addFavoriteMountain();
    }
  }

  async addFavoriteMountain() {
    let favoriteMountains = [];
    const id = this.route.snapshot.paramMap.get('id');
    
    try {
      favoriteMountains = await this.storage.get('favoriteMountains');


      if(favoriteMountains == null){
        favoriteMountains = [];
      }

      let mountainDetails = {
        name: this.mountainName,
        elevation: this.mountainElevation,
        mountainId: id,
        range: this.range,
        hasRouteClass: this.hasRouteClass,
        thumbnailUrl: this.thumbnailUrl
      };

      favoriteMountains.push(mountainDetails);

      let newFavorites = await this.storage.set('favoriteMountains', favoriteMountains);

    } catch (error) {
      console.log('Error in addFavoriteMountain.', error);
    }
    this.checkIfMountainIsFavorite();
  }

  async deleteFavoriteMountain() {
    try {
      let favoriteMountains = [];
      const id = this.route.snapshot.paramMap.get('id');
  
      favoriteMountains = await this.storage.get('favoriteMountains');
  
      if(favoriteMountains == null) {
        favoriteMountains = [];
      }
  
      let newFavorites = favoriteMountains.filter(favorite => {
        return favorite.mountainId != id;
      });
  
      let results = await this.storage.set('favoriteMountains', newFavorites);
    } catch (error) {
      console.log('Error in deleteFavoriteMountain(). ', error);
    }

    this.checkIfMountainIsFavorite();
  }


  async saveMountainToProgress(completedDate) {
    let completedMountains = [];
    const id = this.route.snapshot.paramMap.get('id');
    
    try {
      completedMountains = await this.storage.get('completedMountains');

      if(completedMountains == null){
        completedMountains = [];
      }

      let mountainDetails = {
        name: this.mountainName,
        elevation: this.mountainElevation,
        mountainId: id,
        range: this.range,
        hasRouteClass: this.hasRouteClass,
        dateCompleted: completedDate,
        thumbnailUrl: this.thumbnailUrl
      };


      completedMountains.push(mountainDetails);

      let newFavorites = await this.storage.set('completedMountains', completedMountains);
    } catch (error) {
      console.log('Error in addCompleteMountain.', error);
    }
    this.checkIfMountainIsCompleted();

  }

  async removeMountainFromProgress() {
    try {
      let completedMountains = [];
      const id = this.route.snapshot.paramMap.get('id');
  
      completedMountains = await this.storage.get('completedMountains');
  
      if(completedMountains == null) {
        completedMountains = [];
      }
  
      let newCompletedMountains = completedMountains.filter(mountain => {
        return mountain.mountainId != id;
      });
  
      let results = await this.storage.set('completedMountains', newCompletedMountains);
    } catch (error) {
      console.log('Error in deleteFavoriteMountain(). ', error);
    }

    this.checkIfMountainIsCompleted();
  }

  async presentSaveProgressAlert() {
    let today = new Date(Date.now()).toISOString();
    console.log('today: ', today);
    today = today.substring(0,10);
    console.log('now today: ', today);
    

    const alert = this.alertController.create({
      header: 'Summit Date',
      inputs: [
        {
          name: 'date1',
          type: 'date',
          max: today
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel called');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            this.saveMountainToProgress(data.date1);
            console.log('save called and date: ', data.date1);
          }
        }
      ]
    });

    (await alert).present();
  }


  async presentRemoveProgressAlert() {
    const alert = this.alertController.create({
      header: 'Delete?',
      message: `Are you sure you want to remove ${this.mountainName} from your saved progress?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { console.log('cancel called'); }
        },
        {
          text: 'Delete',
          handler: () => {
            this.removeMountainFromProgress();
          }
        }
      ]
    });

    (await alert).present();
  }


}
