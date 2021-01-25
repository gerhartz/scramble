import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-resource-modal',
  templateUrl: './resource-modal.page.html',
  styleUrls: ['./resource-modal.page.scss'],
})
export class ResourceModalPage implements OnInit {

  modalTitle: string;
  modelId: number;

  selectedClasses: any[];
  selectedTHAccess: any[];      // Paved 2WD...Easy 2WD Dirt...Rough 2WD Dirt...Easy 4WD...Severe 4WD

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.selectedClasses = this.navParams.data.selectedClasses;
    this.selectedTHAccess = this.navParams.data.selectedTHAccess;
    console.log('inside resource modal. selected classes: ', this.selectedClasses);
  }

  async closeModal() {
    let dataToReturn = {
      onClosedData: 'Wrapped up!',
      selectedClasses: this.selectedClasses,
      selectedTHAccess: this.selectedTHAccess
    }

    await this.modalController.dismiss(dataToReturn);
  }

  // Check if 'All' is the only option selected
  // Returns true if the only class selection is 'All' otherwise returns false
  onlyAllIsSelected(list): boolean {
    let onlyAllIsSelected = true;

    for(let i = 0; i < list.length - 1; i++){
      if(list[i] == true){
        onlyAllIsSelected = false;
      }
    }
    return onlyAllIsSelected;
  }

  selectChip(chipNumber){
    //Do not allow 'All Classes' to be deselected if there isn't another class selected
    if(chipNumber == 5 && this.onlyAllIsSelected(this.selectedClasses)){
      return;
    }

    // Get the new value that will be inserted into selectedClasses array if allowed to proceed
    let newChipValue = !this.selectedClasses[chipNumber];

    // Going from 'All Classes' to only selecting a specific class
    if(this.onlyAllIsSelected(this.selectedClasses) && chipNumber != 5 && newChipValue){
      this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
      this.selectedClasses[5] = false;
      return;
    }

    // Selecting 'All' after it had been deselected
    if(chipNumber == 5 && this.selectedClasses[5] == false){
      this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
      this.selectedClasses.fill(false, 0, 5);
      return;
    }

    // Last individual class was deselected so select 'All'
    if(chipNumber != 5 && !newChipValue && this.selectedClassesWillBecomeEmpty(this.selectedClasses, chipNumber)){
      this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
      this.selectedClasses[5] = true;  
      return;
    }
    
    // Standard select. Assumes 'All' is deselected and another specific class is already selected
    this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
  }

  selectedClassesWillBecomeEmpty(list, chipNumber): boolean {
    console.log('inside selectedclasswilbeocmeempty: ', this.selectedClasses);
    //Chip number represents the class that is about to be deselected. 
    let classWillBeEmpty = true;

    for(let i = 0; i < list.length - 1; i++){
      if(list[i] == true && i != chipNumber){
        console.log('class will be empty false hit');
        classWillBeEmpty = false;
        break;
      }
    }
    
    return classWillBeEmpty;
  }


  selectTrailhead(trailheadNum) {
    console.log('th num: ', trailheadNum);
    //Do not allow 'All Classes' to be deselected if there isn't another class selected
    if(trailheadNum == 5 && this.onlyAllIsSelected(this.selectedTHAccess)){
      return;
    }

    // Get the new value that will be inserted into trailhead access array if allowed to proceed
    let newTHValue = !this.selectedTHAccess[trailheadNum];

    // Going from 'All Classes' to only selecting a specific class
    if(this.onlyAllIsSelected(this.selectedTHAccess) && trailheadNum != 5 && newTHValue){
      console.log('inside here');
      this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
      this.selectedTHAccess[5] = false;
      return;
    }

    // Selecting 'All' after it had been deselected
    if(trailheadNum == 5 && this.selectedTHAccess[5] == false){
      this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
      this.selectedTHAccess.fill(false, 0, 5);
      return;
    }

    // Last individual class was deselected so select 'All'
    if(trailheadNum != 5 && !newTHValue && this.selectedClassesWillBecomeEmpty(this.selectedTHAccess, trailheadNum)){
      this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
      this.selectedTHAccess[5] = true;  
      return;
    }
    
    // Standard select. Assumes 'All' is deselected and another specific class is already selected
    this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
  }
}

