import {Component, Inject} from "@angular/core";
import {
  IVehicleProvider,
  VEHICLE_PROVIDER, VehiclePrices,
  VehicleSize,
  VehicleSummary,
  VehicleType
} from "../../../core/schema/ivehicle.provider";
import {FerryModel} from "../../../core/schema/ferry.model";


@Component({
  selector: "ferry-terminal",
  templateUrl: "./ferry.terminal.component.html",
  styleUrls: ["./ferry.terminal.component.css"]
})
export class FerryTerminalComponent {
  enableButtonNewVehicle = true;
  currentVehicle: VehicleSummary;
  vehiclesList: VehicleSummary[] = [];
  reportList: any[] = [];

  ferryList: FerryModel[] = [{
    size: 'small',
    acceptSize: VehicleSize.small,
    capacity: 8,
    vehicles: []
  }, {
    size: 'large',
    acceptSize: VehicleSize.large,
    capacity: 6,
    vehicles: []
  }];

  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
  ) {
  }

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    let ferryOnCharging = this.ferryList.find(value => value.acceptSize === this.currentVehicle.category);
    // @ts-ignore
    if (ferryOnCharging?.capacity === ferryOnCharging?.vehicles?.length + 1) {
      this.enableButtonNewVehicle = false;
    }
    console.log(this.enableButtonNewVehicle);
    if (!ferryOnCharging) {
      return
    } else {
      // @ts-ignore
      ferryOnCharging.vehicles.push(this.currentVehicle);
    }
    this.generateReport(this.currentVehicle);
  }

  disableMoreVehicles(event: boolean) {
    this.enableButtonNewVehicle = !event;
  }


  private generateReport(vehicle: VehicleSummary) {

    this.vehiclesList.push(vehicle);
    this.vehiclesList.reduce((r, a) => {
      r[a.type] = [...r[a.type] || [], a];
      return r;
    }, this.reportList);
  }

  typeCar(code: VehicleType) {
    return VehicleType[code];
  }

  carPrice(code: VehicleType) {
    // @ts-ignore
    return VehiclePrices[VehicleType[code]];
  }

}
