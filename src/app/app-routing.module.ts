import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewusersComponent } from './components/viewuser/viewuser.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { TestbuttonComponent } from './components/testbutton/testbutton.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: "/components/login", pathMatch: 'full' },
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  { path: 'view', component: ViewusersComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'update/:id', component: UpdateuserComponent },
  { path: 'test',component:TestbuttonComponent},
  { path: 'courses',component:CourselistComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
