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

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

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

    //this.waitForDone();

    /* this was working but didn't filter
    this.climbService.getMountains().subscribe(data => {
      this.mountains = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        };
      });

    });
    */
  }

  waitForDone() {
    var tmp = this;
    if( this.mountains != null){
        this.filter();
    }
    else{
        setTimeout(function(){
            tmp.waitForDone();
        },500);
    }
  }

  filter() {
    
  }



  handleEvent(){
    console.log('here in handle');
    //console.log(event.target.value);
    // let stateAbbreviation = event.target.value;
    
    if(this.sortStatus == 'elevation'){
      this.ordering = 'desc'
    } else {
      this.ordering = 'asc';
    }


    this.filterMountain2();

    /*

    
    if(this.state == '' || this.state == 'All'){
      this.climbService.getMountainsByOrder(this.sortStatus, this.ordering).subscribe(data => {
        this.mountains = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          };
        })
      });
    } else {
      this.climbService.getMountainsByState(this.state, this.sortStatus, this.ordering).subscribe(data => {
        this.mountains = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          };
        })
      });
    }
    */
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ResourceModalPage,
      //swipeToClose: true,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title",
        "selectedClasses": this.selectedClasses,
        "selectedTHAccess": this.selectedTHAccess
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log('data: ', JSON.stringify(dataReturned));
        //alert('Modal Sent Data :'+ dataReturned);
        console.log('modal returned: ', this.dataReturned);
        this.selectedClasses = dataReturned.data.selectedClasses;
        console.log('after return selected classes: ', this.selectedClasses);
        this.filterMountain2();
      }
    });

    return await modal.present();
  }

  filterMountain2() {
    console.log('filtermtns2 start\n class: ' + this.selectedClasses + '\n and trailheads: ' + this.selectedTHAccess);
    this.filteredMountains = this.mountains.filter(mountain => {
      let includeMountain = false;

      let classMatch = false;
      let trailheadMatch = false;

      if(this.selectedClasses[5] == true){
        classMatch = true;
      }

      if(this.selectedTHAccess[5] == true){
        trailheadMatch = true;
      }

      if(classMatch && trailheadMatch){
        return true;
      }

      if(!mountain.routes){
        return false;
      }

      console.log('mountanname: ', mountain.name);
      console.log('trailhead status: ', trailheadMatch);
      console.log('classmatch: ', classMatch);

      // Cycle through each route until we find matching class and match
      for(let i = 0; i < mountain.routes.length; i++){
        // Trailhead doesn't matter
        if(trailheadMatch){
          let ref = mountain.routes[i].class;
          console.log(ref);
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

  filterMountains() {  
    console.log('filtermountains() called and trailheadList: ', this.selectedTHAccess);  
    this.filteredMountains = this.mountains.filter(mountain => {
      let includeMountain = false;

      // Every class is true so return true regardless of route class
      if(this.selectedClasses[5] == true){
        includeMountain = true;
      } else {
        //Specific classes are selected. Only return if the mountain has that class
        //Cycle through which classes user wants to display
        for(let i = 0; i < this.selectedClasses.length - 1; i++){
          if(mountain.hasRouteClass) {
            if(this.selectedClasses[i] == true && mountain.hasRouteClass[i] == true){
              includeMountain = true;
              break;
            }
          }
        }
      }

      // Mountain excluded because it does not meet selectedClass requirement
      if(!includeMountain){
        return false;
      } else {
        includeMountain = false;  //reset flag
        // Filter on Trailhead Access
        if(this.selectedTHAccess[5] == true){
          includeMountain = true;
          return true;
        } else {

          if(mountain.routes){
            let routes = mountain.routes;
            for(let i = 0; i < routes.length; i++){
              console.log('routes[i] = ', routes[i]);
              if(this.selectedTHAccess[routes[i].trailheadAccess]){
                includeMountain = true;
                break;
              }
            }
          }

/*
          // Return true if the mountain has a matching trailhead access level
          for(let i = 0; i < this.selectedTHAccess.length - 1; i++){
            if(mountain.hasTrailheadAccess) {
              if(this.selectedTHAccess[i] == true && mountain.hasTrailheadAccess[i] == true){
                includeMountain = true;
                break;
              }
            }
          }
*/
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

    console.log(`filterMountains() end \nNum in mountains: ${this.mountains.length}\nNum in filteredMountains: ${this.filteredMountains.length}`);

    /*
    this.mountains = this.mountains.filter(mountain => {
      let includeMountain = false;

      //Cycle through which classes user wants to display
      for(let i = 0; i < this.selectedClasses.length; i++){
        if(mountain.hasRouteClass) {
          if(this.selectedClasses[i] == true && mountain.hasRouteClass[i] == true){
            includeMountain = true;
            break;
          }
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
    })
    */
  }

  /*
  sortChanged(event) {
    //console.log(event);
    console.log(event.detail.value);
    let sortKey = event.detail.value;
    
    if(sortKey == 'elevation') {
      this.climbService.getMountainsByElevation().subscribe(data => {
        this.mountains = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          };
        });
      });
    } else {
      //Get mountains by name
      this.climbService.getMountains().subscribe(data => {
        this.mountains = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          };
        });
      });
    }
  }
  */


}
