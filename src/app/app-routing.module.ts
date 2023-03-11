import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./core/components/main/main.component";
import {SessionGuard} from "./core/guards/session.guard";

const routes: Routes = [
  {path: 'main', canActivate: [SessionGuard], component: MainComponent},
  {
    path: 'students', canLoad: [SessionGuard],
    loadChildren: () => import('./students/students.module')
      .then((module) => module.StudentsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then((module) => module.AuthModule)
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
