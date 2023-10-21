import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";

const routes: Routes = [
  {
    component: MainComponent,
    path: ''
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  { path: 'users/:id',
    component: UserProfileComponent
  },
  { path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
