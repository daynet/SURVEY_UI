import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { HttpInterceptorModule } from './http/http-request-interceptor';
import { ViewService } from './views/view.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { TestcategoryComponent } from './views/Test/testcategory/testcategory.component';
import { AppConfig } from './Config/app.config';
import { UserdetailsComponent } from './views/userdetails/userdetails.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { CountdownModule } from 'ngx-countdown';
import { TimerComponent } from './views/timer/timer.component';
import { SchoolsetupComponent } from './views/schoolsetup/schoolsetup.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { SurveyComponent } from './views/survey/survey.component';
import { SurveyresultComponent } from './views/surveyresult/surveyresult.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpInterceptorModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, CountdownModule, ],
  
    declarations: [
    AppComponent,
   
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    RegisterComponent,
    SpinnerComponent,
    TestcategoryComponent,
    UserdetailsComponent,
    HomepageComponent,
    TimerComponent,
    SchoolsetupComponent,
    LandingpageComponent,
    SurveyComponent,
    SurveyresultComponent,
    


   
],


exports : [SpinnerComponent],

  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,

  },AppConfig],

  bootstrap: [ AppComponent ],
})
export class AppModule { }
