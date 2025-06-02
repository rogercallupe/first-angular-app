import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        TasksComponent,
        TaskComponent,
        NewTaskComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {
    // This is the root module of the application.
    // It imports BrowserModule for browser-specific functionalities,
    // and declares the main component (AppComponent) that will be bootstrapped.
    // Additional components like HeaderComponent, UserComponent, and TaskComponent are also imported.    
}