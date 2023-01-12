import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponentComponent } from './addition-component/addition-component.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { SubstactionComponent } from './substaction/substaction.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponentComponent},
  {path:"my",component:MycomponentComponent},
  {path:"sub",component:SubstactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
