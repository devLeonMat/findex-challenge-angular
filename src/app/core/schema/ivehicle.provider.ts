import {InjectionToken} from "@angular/core";

export const VEHICLE_PROVIDER = new InjectionToken("IVehicleProvider");

export interface IVehicleProvider {
  GetVehicle(): VehicleSummary;
}

export class VehicleSummary {
  type: VehicleType;
  category: VehicleSize;
  icon?: string;
}

export enum VehicleSize {
  small,
  large
}

export enum VehicleType {
  car,
  van,
  truck,
  bus
}

export enum VehiclePrices {
  car = 5,
  van = 7.5,
  truck = 10,
  bus = 15
}
