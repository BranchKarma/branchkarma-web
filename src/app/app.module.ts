import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { MyHttpInterceptorInterceptor } from './interceptors/my-http-interceptor.interceptor';
import { ChangeBgColorOnClickDirective } from './directives/change-bg-color-on-click.directive';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { QuickSidebarComponent } from './layout/quick-sidebar/quick-sidebar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CallComponent } from './pages/call/call.component';
import { VideoComponent } from './pages/video/video.component';
import { EmailComponent } from './pages/email/email.component';
import { DocumentComponent } from './pages/document/document.component';
import { SlackComponent } from './pages/slack/slack.component';
import { RemoteControlComponent } from './pages/remote-control/remote-control.component';
import { HelpDeskComponent } from './pages/help-desk/help-desk.component';
import { DropdownExampleComponent } from './components/dropdown-example/dropdown-example.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { WorkWithUsComponent } from './layout/work-with-us/work-with-us.component';
import { CoreValueComponent } from './layout/core-value/core-value.component';
import { OurProductServicesComponent } from './layout/our-product-services/our-product-services.component';
import { ImageInlineComponent } from './layout/image-inline/image-inline.component';
import { CircleCardsComponent } from './layout/circle-cards/circle-cards.component';
import { BannerComponent } from './layout/banner/banner.component';
import { VisionComponent } from './layout/vision/vision.component';
import { WorkAndBeYourSelfComponent } from './work-and-be-your-self/work-and-be-your-self.component';
import { SquareCardsComponent } from './layout/square-cards/square-cards.component';
import { InfinityBarComponent } from './layout/infinity-bar/infinity-bar.component';
import { GeneralEnquiryFormComponent } from './layout/general-enquiry-form/general-enquiry-form.component';
import { CareersFormComponent } from './layout/careers-form/careers-form.component';
import { IdeasFormComponent } from './layout/ideas-form/ideas-form.component';
import { PartnerProjectFormComponent } from './layout/partner-project-form/partner-project-form.component';
import { EnquiryComponent } from './layout/enquiry/enquiry.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FirmsComponent } from './pages/firms/firms.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { EntrepreneursComponent } from './pages/entrepreneurs/entrepreneurs.component';
import { CareersComponent } from './pages/careers/careers.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PortalComponent } from './pages/portal/portal.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FourZeroFourComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    MainComponent,
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    ChangeBgColorOnClickDirective,
    NavbarComponent,
    QuickSidebarComponent,
    SidebarComponent,
    CallComponent,
    VideoComponent,
    EmailComponent,
    DocumentComponent,
    SlackComponent,
    RemoteControlComponent,
    HelpDeskComponent,
    DropdownExampleComponent,
    CardCarouselComponent,
    WorkWithUsComponent,
    CoreValueComponent,
    OurProductServicesComponent,
    ImageInlineComponent,
    CircleCardsComponent,
    BannerComponent,
    VisionComponent,
    WorkAndBeYourSelfComponent,
    SquareCardsComponent,
    InfinityBarComponent,
    GeneralEnquiryFormComponent,
    CareersFormComponent,
    IdeasFormComponent,
    PartnerProjectFormComponent,
    EnquiryComponent,
    ContactUsComponent,
    FirmsComponent,
    PartnersComponent,
    EntrepreneursComponent,
    CareersComponent,
    AboutUsComponent,
    NewsComponent,
    TeamsComponent,
    PortalComponent,
    ChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
