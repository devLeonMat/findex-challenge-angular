import {VehicleSize, VehicleSummary} from "./ivehicle.provider";

export class FerryModel {
  size?: string;
  acceptSize?: VehicleSize;
  capacity?: number;
  vehicles?: VehicleSummary[] = [];
}
