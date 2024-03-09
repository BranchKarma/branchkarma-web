import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FirmsComponent } from './pages/firms/firms.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { EntrepreneursComponent } from './pages/entrepreneurs/entrepreneurs.component';
import { CareersComponent } from './pages/careers/careers.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PortalComponent } from './pages/portal/portal.component';
import { VisionComponent } from './pages/vision/vision.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'firms', component: FirmsComponent },
      { path: 'vision', component: VisionComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'entrepreneurs', component: EntrepreneursComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'news', component: NewsComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'portal', component: PortalComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
  {
    path: '**',
    component: FourZeroFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
