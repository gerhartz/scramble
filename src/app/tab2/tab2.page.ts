import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favoriteMountains: any[];
  favoriteRoutes: any;
  noFavoriteRoutes = true;

  constructor(
    private storage: Storage
  ) {}

  ngOnInit() {
    this.getFavoriteMountains();
    this.getFavoriteRoutes();
  }

  async ionViewWillEnter()
  {
    this.getFavoriteMountains();
    //this.favoriteMountains = await this.storage.get('favoriteMountains');
    this.favoriteRoutes = await this.storage.get('favoriteRoutes');
  }

  async getFavoriteMountains() {
    this.favoriteMountains = await this.storage.get('favoriteMountains');

    if(Array.isArray(this.favoriteMountains)){
      if(this.favoriteMountains.length > 0){
        this.noFavoriteRoutes = false;
      } else {
        this.noFavoriteRoutes = true;
      }
    } else {
      this.noFavoriteRoutes = true;
    }

    
    /*if(Array.isArray(this.favorites)) {
      this.favorites.sort(this.compareFunction);
    };
    */
  }

  async getFavoriteRoutes() {
    this.favoriteRoutes = await this.storage.get('favoriteRoutes');
  }

  compareFunction(a, b): boolean {
    return true;
  }
  



}
