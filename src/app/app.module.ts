import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewusersComponent } from './components/viewuser/viewuser.component';
import {ReactiveFormsModule} from '@angular/forms'
import { TestbuttonComponent } from './components/testbutton/testbutton.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    UpdateuserComponent,
    ViewusersComponent,
    TestbuttonComponent,
    CourselistComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
