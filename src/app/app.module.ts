import { TokenInterceptorService } from './Services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { GeneticComponent } from './Pages/genetic/genetic.component';
import { ProjectPlanningComponent } from './Pages/project-planning/project-planning.component';
import { SelectedClientsComponent } from './Pages/selected-clients/selected-clients.component';
import { NgwWowModule } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    GeneticComponent,
    ProjectPlanningComponent,
    SelectedClientsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
