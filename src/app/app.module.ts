import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MediumBlogsComponent } from './medium-blogs/medium-blogs.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule } from 'ngx-bootstrap/accordion';
import { SignupComponent } from './signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ResetComponent } from './reset/reset.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    LoginComponent,
    MediumBlogsComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    SignupComponent,
    DashboardComponent,
    ResetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
