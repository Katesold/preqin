export interface FirmData {
  firmID: string;
  firmName: string;
  firmType: string;
  yearEst: string;
  address: string;
}
export enum AssetClasses {
  PE = "PE(Private Equity)",
  PD = "PD(Private Debt)",
  RE = "RE(Real Estate)",
  INF = "INF(Infrastructure)",
  NR = "NR(Natural Resources)",
  HF = "HF(Hedge Funds)",
}
