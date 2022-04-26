import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HardcodedVehicleService} from "./core/services/hardcoded.vehicle.service";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./views/shared/shared.module";
import {ComponentsModule} from "./views/components/components.module";
import {VEHICLE_PROVIDER} from "./core/schema/ivehicle.provider";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [{
    provide: VEHICLE_PROVIDER,
    useClass: HardcodedVehicleService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
