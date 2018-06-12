import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  editState: boolean = false;
  movieToEdit: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies =>{
      this.movies = movies;
    })
  }

  deleteMovie(event, movie: Movie){
    this.clearState();
    this.movieService.deleteMovie(movie);
  }

  editMovie(event, movie: Movie){
    this.editState = true;
    this.movieToEdit = movie;
  }

  updateMovie(movie: Movie){
    this.movieService.updateMovie(movie);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.movieToEdit = null;
  }

}
