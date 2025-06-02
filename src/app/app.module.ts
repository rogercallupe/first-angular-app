import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, HeaderComponent, UserComponent, TaskComponent]
})
export class AppModule {
    // This is the root module of the application.
    // It imports BrowserModule for browser-specific functionalities,
    // and declares the main component (AppComponent) that will be bootstrapped.
    // Additional components like HeaderComponent, UserComponent, and TaskComponent are also imported.    
}