import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChargersService } from 'src/app/service/charger/chargers.service';

@Component({
  selector: 'app-charger-setting',
  templateUrl: './charger-setting.component.html',
  styleUrls: ['./charger-setting.component.css']
})
export class ChargerSettingComponent implements OnInit{
  chargerSetting:any;
  chargerId: any;
  isChecked = false;
  chargerData: any;
  chargerFormData: any;

  constructor(private activeRoute: ActivatedRoute,private formbuilder:FormBuilder,private charger:ChargersService) {
    this.chargerSetting = this.formbuilder.group({
      chargerId: '',
      chargerName: '',
      chargerInputVoltage: '',
      chargerOutputVoltage: '',
      chargerMinInputAmpere: '',
      chargerMaxInputAmpere: '',
      chargerOutputAmpere: '',
      chargerInputFrequency: '',
      chargerOutputFrequency: '',
      chargerIPRating: '',
      chargerMountType: '',
      chargerSerialNumber: ''

    })
  }
  

  ngOnInit(): void {
      this.chargerId = this.activeRoute.snapshot.paramMap.get('chargerId');
      this.chargerDetailsUsingId(this.chargerId);      
  }

  chargerDetailsUsingId(id: any){
    this.charger.getChargerById(id).subscribe((result)=>{      
      this.chargerFormData = result;
      this.chargerSetting.patchValue(this.chargerFormData)
      
    })
  }

  closeUpdateCharger(){
    this.isChecked = false;
  }

  updateChargerForm(){
    this.charger.updateCharger(this.chargerId,this.chargerSetting.value).subscribe((result)=>{
      console.warn(result);
      
    })
  }

}
