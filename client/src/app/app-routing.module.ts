import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExamplesComponent } from "./pages/examples/examples.component";
import { examplesRoutes } from "./pages/examples/examples.routes";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'examples'
  },
  {
    path: 'examples',
    component: ExamplesComponent,
    data: { title: 'Examples' },
    children: examplesRoutes
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
