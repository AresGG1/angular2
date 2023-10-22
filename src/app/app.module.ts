import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WorkingHoursPipe } from './pipes/woring-hours.pipe';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { RoleAvatarDirective } from './directives/role-avatar.directive';
import { HelloDirective } from './directives/hello.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    WorkingHoursPipe,
    LoginComponent,
    RoleAvatarDirective,
    HelloDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
