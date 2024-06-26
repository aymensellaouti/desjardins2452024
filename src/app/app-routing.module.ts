import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/components/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { canLeaveGuard } from './todo/guard/can-leave.guard';
import { authGuard } from './auth/guards/auth.guard';
// blabla
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddCvComponent, canActivate: [authGuard] },
  { path: 'cv/:id', component: DetailCvComponent },
  { path: 'todo', component: TodoComponent, canDeactivate: [canLeaveGuard] },
  { path: 'word', component: MiniWordComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NF404Component },
  // { path: ':test', component: SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
