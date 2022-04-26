import {NgModule} from "@angular/core";
import {FerryComponent} from "./ferry/ferry.component";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    FerryComponent
  ],
  imports: [
    MatCardModule,
    CommonModule

  ],
  exports: [
    FerryComponent
  ]
})
export class ComponentsModule{

}
