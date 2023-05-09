import { Connector } from "./connector";

export class Charger {
  chargerId!:string;
  chargerName!:string;
  chargerNumber!:number;
  chargerInputVoltage!:string;
  chargerOutputVoltage!:string;
  chargerMinInputAmpere!:string;
  chargerMaxInputAmpere!:string;
  chargerOutputAmpere!:string;
  chargerInputFrequency!:string;
  chargerOutputFrequency!:string;
  chargerIPRating!:string;
  chargerMountType!:string;
  chargerNumberOfConnector!:number;
  isRFID!:string;
  chargerSerialNumber!:string;
  chargerOCPPProtocol!:string;
  chargerConnectorType!:string;
  isAppSupport!:string;
  isTBCutOff!:string;
  isAntitheft!:string;
  isLEDDisplay!:string;
  isLEDIndications!:string;
  isSmart!:string;
  createdDate!:Date;
  modifiedDate!:Date;
  createdBy!:string;
  modifiedBy!:string;
  isActive!:boolean;
  connectors:Connector[]=[]; 
}
