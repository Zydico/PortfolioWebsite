import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsHomeComponent } from './portfolio/components/projects-home/projects-home.component';
import { SortAlgorithmVisualizerComponent } from './portfolio/components/projects/sort-algorithm-visualizer/sort-algorithm-visualizer.component';
import { ProjectsWebAppsComponent } from './portfolio/components/projects-web-apps/projects-web-apps.component';
import { ProjectsSchoolComponent } from './portfolio/components/projects-school/projects-school.component';
import { PaperAirplaneComponent } from './portfolio/components/projects/paper-airplane/paper-airplane.component';
import { CreditCalculatorComponent } from './portfolio/components/projects/credit-calculator/credit-calculator.component';
import { BalsaWoodGliderComponent } from './portfolio/components/projects/balsa-wood-glider/balsa-wood-glider.component';
import { PianoPedalComponent } from './portfolio/components/projects/piano-pedal/piano-pedal.component';
import { AirfoilAnalysisComponent } from './portfolio/components/projects/airfoil-analysis/airfoil-analysis.component';
import { KeplerComponent } from './portfolio/components/projects/kepler/kepler.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { 
    path: 'portfolio', 
    component: PortfolioComponent,
    children: [
      { path: '', component: ProjectsHomeComponent },
      { path: 'web-apps', component: ProjectsWebAppsComponent },
      { path: 'school', component: ProjectsSchoolComponent }
    ]
  },
  // Web Apps
  { path: 'sort-algorithm-visualizer', component: SortAlgorithmVisualizerComponent },
  { path: 'kepler-simulation', component: KeplerComponent },

  // School Projects
  { path: 'paper-airplane', component: PaperAirplaneComponent },
  { path: 'credit-calculator', component: CreditCalculatorComponent },
  { path: 'balsa-wood-glider', component: BalsaWoodGliderComponent },
  { path: 'piano-pedal', component: PianoPedalComponent },
  { path: 'airfoil-analysis', component: AirfoilAnalysisComponent },

  // Default Redirect
  { path: '**', redirectTo: '/portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
