import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

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
import { SortAlgorithmVisualizerComponent } from './portfolio/components/projects/sort-algorithm-visualizer/sort-algorithm-visualizer.component';
import { ProjectsWebAppsComponent } from './portfolio/components/projects-web-apps/projects-web-apps.component';
import { ProjectsSchoolComponent } from './portfolio/components/projects-school/projects-school.component';
import { PaperAirplaneComponent } from './portfolio/components/projects/paper-airplane/paper-airplane.component';
import { CreditCalculatorComponent } from './portfolio/components/projects/credit-calculator/credit-calculator.component';
import { BalsaWoodGliderComponent } from './portfolio/components/projects/balsa-wood-glider/balsa-wood-glider.component';
import { PianoPedalComponent } from './portfolio/components/projects/piano-pedal/piano-pedal.component';
import { AirfoilAnalysisComponent } from './portfolio/components/projects/airfoil-analysis/airfoil-analysis.component';
import { ProjectBoxComponent } from './shared/components/project-box/project-box.component';
import { KeplerComponent } from './portfolio/components/projects/kepler/kepler.component';
import { ProjectsResearchComponent } from './portfolio/components/projects-research/projects-research.component';
import { Cr3bpComponent } from './portfolio/components/projects/cr3bp/cr3bp.component';
import { SdaComponent } from './portfolio/components/projects/sda/sda.component';
import { SatellitesComponent } from './portfolio/components/projects/satellites/satellites.component';

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
    ProjectsWebAppsComponent,
    ProjectsSchoolComponent,
    PaperAirplaneComponent,
    CreditCalculatorComponent,
    BalsaWoodGliderComponent,
    PianoPedalComponent,
    AirfoilAnalysisComponent,
    ProjectBoxComponent,
    KeplerComponent,
    ProjectsResearchComponent,
    Cr3bpComponent,
    SdaComponent,
    SatellitesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  exports: [ CommonModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
