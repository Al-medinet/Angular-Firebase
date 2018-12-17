import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import MoviesModel from "../../models/movie.model";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  constructor(private movies_service: MoviesService) {}

  private movies: MoviesModel[];
  ngOnInit() {
    this.loadMovies();
  }

  /**
   * Loading Movies items from database
   */
  loadMovies() {
    console.log("enter load Movies");
    this.movies_service.findAllMovies().subscribe(
      (movies: MoviesModel[]) => {
        this.movies = movies;
        console.log(movies);
      },
      error => console.log(error)
    );
  }
  /**
   * Delete Movie based on @param id
   */
  deleteMovie(id: string) {
    this.movies_service.deleteMovie(id);
  }
}
