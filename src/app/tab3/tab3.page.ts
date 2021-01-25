import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  completedMountains: any;
  userHasMountainsInProgress = false;
  totalSummits = 0;


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
    this.totalSummits = 0;
    this.completedMountains = await this.storage.get('completedMountains');
    

    if(Array.isArray(this.completedMountains)){
      this.totalSummits = this.completedMountains.length;
      this.completedMountains.sort((_a, _b) => {
        if(_a.dateCompleted < _b.dateCompleted){
          return 1;
        } else {
          return -1;
        }
      });
    }
  }
}
