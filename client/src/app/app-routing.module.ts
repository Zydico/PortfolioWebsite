import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsHomeComponent } from './portfolio/components/projects-home/projects-home.component';
import { SortAlgorithmVisualizerComponent } from './sort-algorithm-visualizer/sort-algorithm-visualizer.component';
import { FfxivChecklistComponent } from './ffxiv-checklist/ffxiv-checklist.component';
import { ProjectsGamesComponent } from './portfolio/components/projects-games/projects-games.component';
import { ProjectsWebAppsComponent } from './portfolio/components/projects-web-apps/projects-web-apps.component';
import { FfxivPotdComponent } from './ffxiv-potd/ffxiv-potd.component';
import { SpaceSimulationComponent } from './space-simulation/space-simulation.component';
import { ProjectsSchoolComponent } from './portfolio/components/projects-school/projects-school.component';
import { PaperAirplaneComponent } from './paper-airplane/paper-airplane.component';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { 
    path: 'portfolio', 
    component: PortfolioComponent,
    children: [
      { path: '', component: ProjectsHomeComponent },
      { path: 'games', component: ProjectsGamesComponent },
      { path: 'web-apps', component: ProjectsWebAppsComponent },
      { path: 'school', component: ProjectsSchoolComponent }
    ]
  },
  { path: 'sort-algorithm-visualizer', component: SortAlgorithmVisualizerComponent },
  { path: 'ffxiv-potd', component: FfxivPotdComponent },
  { path: 'ffxiv-checklist', component: FfxivChecklistComponent },
  { path: 'space-simulation', component: SpaceSimulationComponent },
  { path: 'paper-airplane', component: PaperAirplaneComponent },
  { path: 'credit-calculator', component: CreditCalculatorComponent },
  { path: '**', redirectTo: '/portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
