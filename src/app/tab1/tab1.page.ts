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

}
