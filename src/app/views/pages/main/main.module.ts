import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {
}
