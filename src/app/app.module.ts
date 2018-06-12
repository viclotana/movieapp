import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';

import { MovieService } from './services/movie.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'moviesapp'),
    AngularFirestoreModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
