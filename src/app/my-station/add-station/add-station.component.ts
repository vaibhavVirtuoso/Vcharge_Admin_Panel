import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MystationService } from 'src/app/service/mystation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent {
  addStation:FormGroup;
  amenities: Array<any> = [
    {name:'Restroom',value: 'Restroom' },
    {name:'Cafe',value: 'Cafe' },
    {name:'Telephone',value: 'Telephone' },
    {name:'Bar',value: 'Bar' }
  ];

  constructor(private formBuilder: FormBuilder,private myStation:MystationService,private dialogRef: MatDialogRef<AddStationComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private snackBar:MatSnackBar) {
    this.addStation = this.formBuilder.group({
      stationName: '',
      stationLocation: '',
      stationLatitude: '',
      stationLongitude: '',
      stationLocationURL: '',
      stationParkingArea: '',
      stationContactNumber: '',
      stationStatus: '',
      stationPowerStandard: '',
      stationWorkingTime: '',
      stationParkingType: '',
      stationAmenity: this.formBuilder.array([])
    })
  }

  onCheckboxChange(event:any){
    const stationAmenity: FormArray = this.addStation.get('stationAmenity') as FormArray;
    if(event.target.checked){
      stationAmenity.push(new FormControl(event.target.value));
    }
  }
  openSnackBar(message: any,action: any = 'ok') {
    this.snackBar.open(message,action, {
      duration: 3000,
      verticalPosition: 'bottom',
      panelClass: ['warning']
      
    });
  }

  onFormSubmit() {
      this.myStation.addStationToList(this.addStation.value).subscribe((result:any)=>{
        if(result){
        this.openSnackBar("Employee details","Done")
            this.dialogRef.close(true);
        }
      })
  }


}
