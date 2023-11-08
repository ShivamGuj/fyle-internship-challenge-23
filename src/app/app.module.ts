import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserInputComponent } from './user-input/user-input.component';
import { UserReposComponent } from './repo-list/repo-list.component';
import { Routes } from '@angular/router';
import { GithubService } from './github.service';
import { UserInfoComponent } from './user.info/user.info.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorComponent } from './error/error.component';
import { RepoComponent } from './repo/repo.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: '', component: UserInputComponent },
  { path: 'repositories/:username', component: UserReposComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    UserReposComponent,
    UserInfoComponent,
    LoaderComponent,
    ErrorComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
