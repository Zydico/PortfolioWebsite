import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './portfolio/components/background/background.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TitlePageComponent } from './portfolio/components/title-page/title-page.component';
import { HeaderComponent } from './portfolio/components/header/header.component';
import { AboutPageComponent } from './portfolio/components/about-page/about-page.component';
import { ContactPageComponent } from './portfolio/components/contact-page/contact-page.component';
import { SkillsPageComponent } from './portfolio/components/skills-page/skills-page.component';
import { ProjectsPageComponent } from './portfolio/components/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    BackgroundComponent,
    TitlePageComponent,
    HeaderComponent,
    AboutPageComponent,
    ContactPageComponent,
    SkillsPageComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
