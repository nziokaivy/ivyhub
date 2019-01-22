import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: 'home', component: LandingpageComponent },
  { path: 'search', component: ProfileComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents = [ProfileComponent, LandingpageComponent]