import {Injectable} from "@angular/core";
import {
  IVehicleProvider,
  VehicleSize,
  VehicleSummary,
  VehicleType
} from "../schema/ivehicle.provider";

@Injectable()
export class HardcodedVehicleService implements IVehicleProvider {
  GetVehicle(): VehicleSummary {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1: {
        return {
          type: VehicleType.car,
          category: VehicleSize.small,
          icon: 'small-vehicle.png'
        };
      }
      case 2: {
        return {
          type: VehicleType.van,
          category: VehicleSize.small,
          icon: 'small-vehicle.png'
        };
      }
      case 3: {
        return {
          type: VehicleType.truck,
          category: VehicleSize.large,
          icon: 'large-vehicle-2.png'
        };
      }
      default: {
        return {
          type: VehicleType.bus,
          category: VehicleSize.large,
          icon: 'large-vehicle.png'
        };
      }
    }
  }
}
