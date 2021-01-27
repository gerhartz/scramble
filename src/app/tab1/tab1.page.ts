import { Component } from '@angular/core';
import { ClimbService } from '../climb.service';
import { ModalController } from '@ionic/angular';
import { ResourceModalPage } from '../modals/resource-modal/resource-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mountains:any[] = [];
  filteredMountains: any[] = [];


  searchTerm: string = '';
  sortStatus = 'name';
  state = '';
  ordering = 'asc';
  dataReturned: any;
  selectedClasses = [false, false, false, false, false, true]; //5 spot is to denote 'All' being selected
  selectedTHAccess = [false, false, false, false, false, true];
  selectedStates = [true, false, false, false]; //0 = all, 1 = Alaska, 2 = California, 3 = Colorado, 4 = Washington
  

  constructor(
    private climbService: ClimbService,
    public modalController: ModalController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.firestore.collection('mountains', ref => ref.orderBy('name')).snapshotChanges().subscribe(
      data => {
        this.mountains = this.filteredMountains = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          }
        });
      }
    );
  }

  handleEvent(){
    if(this.sortStatus == 'elevation'){
      this.ordering = 'desc'
    } else {
      this.ordering = 'asc';
    }
  
    this.filterMountains();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ResourceModalPage,
      //swipeToClose: true,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title",
        "selectedClasses": this.selectedClasses,
        "selectedTHAccess": this.selectedTHAccess,
        "selectedStates": this.selectedStates
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        this.selectedClasses = dataReturned.data.selectedClasses;
        this.filterMountains();
      }
    });

    return await modal.present();
  }

  filterMountains() {
    this.filteredMountains = this.mountains.filter(mountain => {
      let includeMountain = false;

      let classMatch = false;
      let trailheadMatch = false;
      let stateMatch = false;

      if(this.selectedClasses[5] == true){
        classMatch = true;
      }

      if(this.selectedTHAccess[5] == true){
        trailheadMatch = true;
      }

      let mountainState = mountain.state;
      if(this.selectedStates[0] == true){     // any state will do
        stateMatch = true;
      } else {
        if(mountainState == 'AK' && this.selectedStates[1] == true){
          stateMatch = true;
        } else if (mountainState == 'CA' && this.selectedStates[2] == true){
          stateMatch = true;
        } else if (mountainState == 'CO' && this.selectedStates[3] == true){
          stateMatch = true;
        } else if (mountainState == 'WA' && this.selectedStates[4] == true){
          stateMatch = true;
        }
      }


      if(classMatch && trailheadMatch && stateMatch){
        return true;
      }

      if(!mountain.routes){
        return false;
      }

      if(!stateMatch){
        return false;
      }

      // Cycle through each route until we find matching class and match
      for(let i = 0; i < mountain.routes.length; i++){
        // Trailhead doesn't matter
        if(trailheadMatch){
          let ref = mountain.routes[i].class;
          if(this.selectedClasses[mountain.routes[i].class - 1]){
            includeMountain = true;
            break;
          }
        }

        if(classMatch){
          if(this.selectedTHAccess[mountain.routes[i].trailheadAccess - 1]){
            includeMountain = true;
            break;
          }
        }

        if(this.selectedTHAccess[mountain.routes[i].trailheadAccess - 1] && this.selectedClasses[mountain.routes[i].class - 1]){
          includeMountain = true;
          break;
        }
      }

      return includeMountain;
    }).sort((a, b) => {
      if(this.sortStatus == 'name'){
        if(a.name > b.name){
          return 1;
        } else {
          return -1;
        }
      } else if(this.sortStatus == 'elevation'){
        if(a.elevation < b.elevation) {
          return 1;
        } else {
          return -1
        }
      } else {
        return 1;
      }
    });
  }
}
