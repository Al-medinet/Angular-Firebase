import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-movie-form",
  templateUrl: "./movie-form.component.html",
  styleUrls: ["./movie-form.component.css"]
})
export class MovieFormComponent implements OnInit {
  constructor(private movies_service: MoviesService) {}

  ngOnInit() {}

  /**
   * Insert Movie
   * @param movieForm
   */
  insertMovie(movieForm) {
    if (movieForm.valid) {
      let movie = movieForm.value;
      this.movies_service.saveMovie(movie);
    }
  }
}
