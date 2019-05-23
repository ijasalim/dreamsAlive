import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:"", redirectTo:'signup', pathMatch:'full'},
  { path:"signup", component:SignupComponent },
  { path:"profile", component:TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
