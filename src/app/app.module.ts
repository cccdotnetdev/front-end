import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './pages/company/overview/overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CorporatefactsComponent } from './pages/company/corporatefacts/corporatefacts.component';
import { OurValuesComponent } from './pages/company/our-values/our-values.component';
import { QualityPolicyComponent } from './pages/company/quality-policy/quality-policy.component';
import { OutsourcingComponent } from './pages/partnership/outsourcing/outsourcing.component';
import { ResellerComponent } from './pages/partnership/reseller/reseller.component';
import { RepresentativeComponent } from './pages/partnership/representative/representative.component';
import { ReferralComponent } from './pages/partnership/referral/referral.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { ConsultingComponent } from './pages/services/consulting/consulting.component';
import { DesignComponent } from './pages/services/design/design.component';
import { DevelopmentComponent } from './pages/services/development/development.component';
import { DataHandlingComponent } from './pages/services/data-handling/data-handling.component';
import { ManagementComponent } from './pages/services/management/management.component';
import { EcommerceComponent } from './pages/work/ecommerce/ecommerce.component';
import { MobileAppComponent } from './pages/work/mobile-app/mobile-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    OverviewComponent,
    ContactComponent,
    CorporatefactsComponent,
    OurValuesComponent,
    QualityPolicyComponent,
    OutsourcingComponent,
    ResellerComponent,
    RepresentativeComponent,
    ReferralComponent,
    TechnologyComponent,
    ConsultingComponent,
    DesignComponent,
    DevelopmentComponent,
    DataHandlingComponent,
    ManagementComponent,
    EcommerceComponent,
    MobileAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
