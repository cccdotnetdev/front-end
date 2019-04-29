import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './pages/company/overview/overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CorporatefactsComponent } from './pages/company/corporatefacts/corporatefacts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'company/overview', component: OverviewComponent },
  { path: 'company/corporatefacts', component: CorporatefactsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
