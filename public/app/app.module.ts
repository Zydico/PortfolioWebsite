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
import { ProjectsHomeComponent } from './portfolio/components/projects-home/projects-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SortAlgorithmVisualizerComponent } from './sort-algorithm-visualizer/sort-algorithm-visualizer.component';

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
    ProjectsPageComponent,
    ProjectsHomeComponent,
    LoaderComponent,
    SortAlgorithmVisualizerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }