import { Component } from '@angular/core';
import { ClimbService } from '../climb.service';
import { ModalController } from '@ionic/angular';
import { ResourceModalPage } from '../modals/resource-modal/resource-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mountains:any[] = [];
  searchTerm: string = '';
  sortStatus = 'name';
  state = '';
  ordering = 'asc';
  dataReturned: any;

  constructor(
    private climbService: ClimbService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.climbService.getMountains().subscribe(data => {
      this.mountains = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        };
      })
    });
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
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ResourceModalPage,
      swipeToClose: true,
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
