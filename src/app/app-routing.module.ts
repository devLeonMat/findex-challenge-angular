import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'terminal',
    loadChildren: () => import('./views/pages/ferryterminal/ferry.terminal.module').then(m => m.FerryTerminalModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


