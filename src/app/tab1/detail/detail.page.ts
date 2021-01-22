import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ClimbService } from 'src/app/climb.service';
import { Storage } from '@ionic/storage';

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


  

  constructor(
    private climbService: ClimbService,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: Storage,
    private fireStorage: AngularFireStorage
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
        console.log('spot A: ', favoriteMountains);

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
      console.log('completed: ', completedMountains);
    
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
        console.log('spot A: ', favoriteMountains);

        if(favoriteMountains[id] != undefined){
          console.log('favorite mountain found!');
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
      console.log('data: ', data);
      this.mountainName = data.name;
      this.mountainElevation = data.elevation;
      this.resources = data.resources;
      this.hasRouteClass = data.hasRouteClass;
      this.range = data.range;
      this.getImage(data.imageUrl);


    });
    this.routeList = this.afs.doc<any>('mountains/' + id).collection('routes').valueChanges();
    this.resources = this.afs.doc<any>('mountains/' + id).collection('resources').valueChanges();
    this.guidebooks = this.afs.doc<any>('mountains/' + id).collection('guidebooks').valueChanges();
    //this.climbService.getMountain(id).subscribe(mountain => this.mountain = mountain);
  }

  
  handleBookmark() {
    if(this.isFavorite) {
      console.log('handle bookmrk, delete');
      //this.deleteFavorite();
      this.deleteFavoriteMountain();
    } else {
      //this.addFavorite();
      this.addFavoriteMountain();
    }
  }

  async addFavorite() {
    let favoriteMountains = {};
    const id = this.route.snapshot.paramMap.get('id');
    console.log('addFavorite called and name: ', this.mountainName);


    /*let mountainInfo = await this.afs.collection('mountains').doc(id).get().pipe()
    if(!mountainInfo) {
      console.log('no mountain info');
    } else {
      console.log('mountain info: ', mountainInfo.data());
    }

    console.log('mountain info: ', mountainInfo);
*/
    try {
      favoriteMountains = await this.storage.get('favoriteMountains');
      
      // Check if no favorites
      if(favoriteMountains == null) {
        favoriteMountains = {};
      }

      let mountainInfo = {
        name: this.mountainName,
        elevation: this.mountainElevation
      };

      //Add
      favoriteMountains[id] = mountainInfo;
      let newFavoriteMountains = await this.storage.set('favoriteMountains', favoriteMountains);
      alert('Added to Favorites!');
      console.log('new favs: ', newFavoriteMountains);
      this.checkIfFavorite();
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }   
  }


  async addFavoriteMountain() {
    console.log('add fav mtn called');
    let favoriteMountains = [];
    const id = this.route.snapshot.paramMap.get('id');
    
    try {
      favoriteMountains = await this.storage.get('favoriteMountains');
      console.log('fav mtns: ', favoriteMountains);

      if(favoriteMountains == null){
        favoriteMountains = [];
      }

      let mountainDetails = {
        name: this.mountainName,
        elevation: this.mountainElevation,
        mountainId: id,
        range: this.range,
        hasRouteClass: this.hasRouteClass
      };

      favoriteMountains.push(mountainDetails);

      let newFavorites = await this.storage.set('favoriteMountains', favoriteMountains);

      console.log('new favorites: ', newFavorites);
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
      console.log('results: ', results);
    } catch (error) {
      console.log('Error in deleteFavoriteMountain(). ', error);
    }

    this.checkIfMountainIsFavorite();
  }

 

  // Replaces the favorite list with a new favorite list after removing the current mountain ID
  // Will only be called if the isFavorite == true
  // Assumes favorite list exists if called
  async deleteFavorite() {
    let favoriteMountains = [];
    const id = this.route.snapshot.paramMap.get('id');

    try {
      favoriteMountains = await this.storage.get('favoriteMountains');
      delete favoriteMountains[id];

      let newResults = await this.storage.set('favoriteMountains', favoriteMountains);
      alert('Removed from Favorites.');
      this.checkIfFavorite();
    } catch (reason) {
      console.log('Error in deleteFavorite.', reason);
    }
  }

  async saveMountainToProgress() {
    let completedMountains = [];
    const id = this.route.snapshot.paramMap.get('id');
    
    try {
      completedMountains = await this.storage.get('completedMountains');
      console.log('fav mtns: ', completedMountains);

      if(completedMountains == null){
        completedMountains = [];
      }

      let mountainDetails = {
        name: this.mountainName,
        elevation: this.mountainElevation,
        mountainId: id,
        range: this.range,
        hasRouteClass: this.hasRouteClass
      };

      console.log('mountain details to save: ', mountainDetails);

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
      console.log('results: ', results);
    } catch (error) {
      console.log('Error in deleteFavoriteMountain(). ', error);
    }

    this.checkIfMountainIsCompleted();
  }

}
