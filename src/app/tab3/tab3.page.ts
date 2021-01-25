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
  winterSummits = 0;
  springSummits = 0;
  summerSummits = 0;
  fallSummits = 0;


  constructor(
    private storage: Storage
  ) {}

  ngOnInit() {
    this.getCompletedMountains();
  }

  ionViewWillEnter() {
    this.springSummits = 0;
    this.summerSummits = 0;
    this.fallSummits = 0;
    this.winterSummits = 0;
    this.getCompletedMountains();
  }

  async getCompletedMountains() {
    this.springSummits = 0;
    this.summerSummits = 0;
    this.fallSummits = 0;
    this.winterSummits = 0;


    this.completedMountains = await this.storage.get('completedMountains');
    console.log('completed: ', this.completedMountains);

    if(Array.isArray(this.completedMountains)){
      this.completedMountains.sort((_a, _b) => {
        if(_a.dateCompleted < _b.dateCompleted){
          return 1;
        } else {
          return -1;
        }
      });

      if(this.completedMountains.length > 0){
        this.userHasMountainsInProgress = true;
        this.totalSummits = this.completedMountains.length;
  
        this.completedMountains.forEach(mountain => {
          this.calculateSeason(mountain.dateCompleted);
        });
  
      } else {
        this.userHasMountainsInProgress = false;
      }
    }


  }
  calculateSeason(dateCompleted: any) {
    console.log('date completed: ', dateCompleted);

    let dateToAnalyze = new Date(dateCompleted);
    let month = dateToAnalyze.getMonth();
    let date = dateToAnalyze.getDate();

    console.log('date: ', dateToAnalyze);
    console.log('datemonth: ', month);

    // Take care of the easy months first that don't require looking at the date
    if(month == 11 || month == 0 || month == 1){
      this.winterSummits++;
    } else if (month == 2 || month == 3 || month == 4){
      this.springSummits++;
    } else if (month == 5 || month == 6 || month == 7){
      this.summerSummits++;
    } else if (month == 8 || month == 9 || month == 10){
      this.fallSummits++;
    }
    
  }

}
