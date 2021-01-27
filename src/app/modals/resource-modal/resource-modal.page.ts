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
  selectedStates: any[];  // 0 = All, 1 = Alaska, 2 = California, 3 = Colorado, 4 = Washington

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
    this.selectedStates = this.navParams.data.selectedStates;
  }

  async closeModal() {
    let dataToReturn = {
      onClosedData: 'Wrapped up!',
      selectedClasses: this.selectedClasses,
      selectedTHAccess: this.selectedTHAccess,
      selectedStates: this.selectedStates
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

  selectState(stateNum) {
    console.log('state num: ', stateNum);
    console.log('states array: ', this.selectedStates);
    
    //Do not allow 'All' to be deselected if no other options are selected
    if(stateNum == 0 && this.selectedStates.indexOf(true,1) == -1){
      return;
    }

    // Get the new value that will be inserted into trailhead access array if allowed to proceed
    let newStateVal = !this.selectedStates[stateNum];

    // Going from only 'All' to a single state
    if(stateNum != 0 && this.selectedStates.indexOf(true,1) == -1 && newStateVal){
      this.selectedStates[stateNum] = newStateVal;
      this.selectedStates[0] = false;
      return;
    }

    // Select 'All' after other states were individually selected
    if(stateNum == 0 && this.selectedStates[0] == false){
      console.log('here');
      this.selectedStates[0] = true;
      this.selectedStates.fill(false, 1);
      return;
    }

    // Deselecting last state should turn on 'All'
    if(stateNum != 0 && this.statesArrayWillBecomeEmpty(stateNum) && !newStateVal){
      this.selectedStates[stateNum] = !this.selectedStates[stateNum];
      this.selectedStates[0] = true;
      return;
    }

    this.selectedStates[stateNum] = !this.selectedStates[stateNum];
  }

  statesArrayWillBecomeEmpty(stateNum) {
    let willBecomeEmpty = true;
    for(let i = 1; i < this.selectedStates.length; i++){
      //Look for case where selectedState is true and is not about to be changed (stateNum)
      if(i != stateNum && this.selectedStates[i] == true){
        willBecomeEmpty = false;
        break;
      }
    }
    return willBecomeEmpty;
  }
}

