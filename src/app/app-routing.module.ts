import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {LoginComponent} from "./components/login/login.component";
import {aboutAccessGuardGuard} from "./guards/about-access-guard.guard";
import {usersProfileAccessGuardGuard} from "./guards/users-profile-access-guard.guard";
import {usersAccessGuardGuard} from "./guards/users-access-guard.guard";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
  },
  {
    component: AboutComponent,
    path: 'about',
    canActivate: [aboutAccessGuardGuard]
  },
  { path: 'users',
    component: MainComponent,
    canActivate: [usersAccessGuardGuard]
  },
  { path: 'users/:id',
    component: UserProfileComponent,
    canActivate: [usersProfileAccessGuardGuard]
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
