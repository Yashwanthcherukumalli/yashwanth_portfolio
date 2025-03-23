import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingMOdule{}