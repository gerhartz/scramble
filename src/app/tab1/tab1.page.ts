import { Component } from '@angular/core';
import { ClimbService } from '../climb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mountains:any[] = [];

  constructor(
    private climbService: ClimbService
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

}
