import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movie: Movie = {
    title:'',
    genre:'',
    rating:'',
    date:'',
    src:'',
    movie_id:''
  }

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.movie.title != '' && this.movie.id != ''){
      this.movieService.addMovie(this.movie);
      this.movie.title = '';
      this.movie.rating = '';
      this.movie.genre ='';
      this.movie.movie_id ='';
    }
  }

}
