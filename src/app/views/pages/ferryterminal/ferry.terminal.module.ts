import {CUSTOM_ELEMENTS_SCHEMA, Inject, NgModule} from "@angular/core";
import {FerryTerminalComponent} from "./ferry.terminal.component";
import {FerryTerminalRoutingModule} from "./ferry.terminal-routing.module";
import {MatCardModule} from "@angular/material/card";
import {ComponentsModule} from "../../components/components.module";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
      FerryTerminalComponent
  ],
    imports: [
        FerryTerminalRoutingModule,
        MatCardModule,
        ComponentsModule,
        CommonModule,
        MatTableModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FerryTerminalModule {
}
