import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FerryTerminalComponent} from "./ferry.terminal.component";


const routes: Routes = [
  {path: '', component: FerryTerminalComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FerryTerminalRoutingModule {
}
