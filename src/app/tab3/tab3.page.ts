import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  completedMountains: any;

  constructor(
    private storage: Storage
  ) {}

  ngOnInit() {
    this.getCompletedMountains();
  }

  ionViewWillEnter() {
    this.getCompletedMountains();
  }

  async getCompletedMountains() {
    this.completedMountains = await this.storage.get('completedMountains');
    console.log('completed: ', this.completedMountains);

    if(Array.isArray(this.completedMountains)){
      this.completedMountains.sort((_a, _b) => {
        if(_a.name > _b.name){
          return 1;
        } else {
          return -1;
        }
      });
    }
  }

  compare() {

  }

}
