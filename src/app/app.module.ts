import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/login/login.component';
import { FeedComponent } from './pages/feed/feed.component';
import { RegisterComponent } from './pages/register/register.component';
import { CourseEditComponent } from './pages/edit/course-edit/course-edit.component';
import { UserEditComponent } from './pages/edit/user-edit/user-edit.component';
import { ButtonUploadComponent } from './components/buttons/button-upload/button-upload.component';
import { MoreProgramacaoComponent } from './pages/more-programacao/more-programacao.component';
import { IntroductionComponent } from './pages/courses/introduction/introduction.component';
import { BackEndComponent } from './pages/courses/back-end/back-end.component';
import { FrontEndComponent } from './pages/courses/front-end/front-end.component';
import { DataScienceComponent } from './pages/courses/data-science/data-science.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    FeedComponent,
    RegisterComponent,
    CourseEditComponent,
    UserEditComponent,
    ButtonUploadComponent,
    MoreProgramacaoComponent,
    IntroductionComponent,
    BackEndComponent,
    FrontEndComponent,
    DataScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
