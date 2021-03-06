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

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { 
    path: 'portfolio', 
    component: PortfolioComponent,
    children: [
      { path: '', component: ProjectsHomeComponent },
      { path: 'games', component: ProjectsGamesComponent },
      { path: 'web-apps', component: ProjectsWebAppsComponent },
    ]
  },
  { path: 'sort-algorithm-visualizer', component: SortAlgorithmVisualizerComponent },
  { path: 'ffxiv-potd', component: FfxivPotdComponent },
  { path: 'ffxiv-checklist', component: FfxivChecklistComponent },
  { path: 'space-simulation', component: SpaceSimulationComponent },
  { path: '**', redirectTo: '/portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
