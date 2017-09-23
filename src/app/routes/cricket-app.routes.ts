import { RouterModule, Routes } from '@angular/router';
import { CricketersListComponent } from "app/cricketers/cricketers-list.component";
import { CricketerComponent } from "app/cricketer/cricketer.component";
import { CricketerDetailComponent } from "app/cricketer-detail/cricketer-detail.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/cricketer', pathMatch: 'full' },
  { path: 'cricketer', component: CricketerComponent },
  { path: 'cricketersList', component: CricketersListComponent },
  { path: 'cricketerDetail/:id', component: CricketerDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);