import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faBars as faBars,
  faDatabase as faDatabase,
  faPalette as faPalette,
  faBook as faBook,
  faChartLine as faChartLine,
  faCogs as faCogs,
  faClipboardCheck as faClipboardCheck,
  faUpload as faUpload,
} from '@fortawesome/free-solid-svg-icons';

import {
  faHtml5 as faHtml5,
  faPhp as faPhp,
  faLaravel as faLaravel,
  faAndroid as faAndroid,
  faNode as faNode,
  faWordpress as faWordpress,
  faReact as faReact,
  faAngular as faAngular,
  faSearchengin as faSearchengin,
} from '@fortawesome/free-brands-svg-icons';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBars,
      faHtml5,
      faPhp,
      faLaravel,
      faAndroid,
      faDatabase,
      faNode,
      faPalette,
      faWordpress,
      faReact,
      faAngular,
      faSearchengin,
      faBook,
      faChartLine,
      faCogs,
      faClipboardCheck,
      faUpload
    );
  }
}
