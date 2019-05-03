import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './pages/company/overview/overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CorporatefactsComponent } from './pages/company/corporatefacts/corporatefacts.component';
import { OurValuesComponent } from './pages/company/our-values/our-values.component';
import { QualityPolicyComponent } from './pages/company/quality-policy/quality-policy.component';
import { OutsourcingComponent } from './pages/partnership/outsourcing/outsourcing.component';
import { ReferralComponent } from './pages/partnership/referral/referral.component';
import { RepresentativeComponent } from './pages/partnership/representative/representative.component';
import { ResellerComponent } from './pages/partnership/reseller/reseller.component';
import { ConsultingComponent } from './pages/services/consulting/consulting.component';
import { DataHandlingComponent } from './pages/services/data-handling/data-handling.component';
import { DesignComponent } from './pages/services/design/design.component';
import { DevelopmentComponent } from './pages/services/development/development.component';
import { ManagementComponent } from './pages/services/management/management.component';
import { EcommerceComponent } from './pages/work/ecommerce/ecommerce.component';
import { MobileAppComponent } from './pages/work/mobile-app/mobile-app.component';
import { CompanyComponent } from './pages/company/company/company.component';
import { PartnershipComponent } from './pages/partnership/partnership/partnership.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { ServicesComponent } from './pages/services/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company/:modulename', component: CompanyComponent },
  { path: 'company/overview', component: OverviewComponent },
  { path: 'company/corporatefacts', component: CorporatefactsComponent },
  { path: 'company/our-values', component: OurValuesComponent },
  { path: 'company/quality-policy', component: QualityPolicyComponent },
  { path: 'partnership', component: PartnershipComponent },
  { path: 'partnership/outsourcing', component: OutsourcingComponent },
  { path: 'partnership/referral', component: ReferralComponent },
  { path: 'partnership/representative', component: RepresentativeComponent },
  { path: 'partnership/reseller', component: ResellerComponent },
  { path: 'services', component:ServicesComponent},
  { path: 'services/consulting', component: ConsultingComponent },
  { path: 'services/data-handling', component: DataHandlingComponent },
  { path: 'services/design', component: DesignComponent },
  { path: 'services/development', component: DevelopmentComponent },
  { path: 'services/management', component: ManagementComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'work/ecommerce', component: EcommerceComponent },
  { path: 'work/mobile-app', component: MobileAppComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
