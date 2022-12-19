import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './pages/edit/user-edit/user-edit.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MoreProgramacaoComponent } from './pages/more-programacao/more-programacao.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'curso-programacao', component: MoreProgramacaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
