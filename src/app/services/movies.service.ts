import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import "rxjs/add/operator/map";
import MoviesModel from "../models/movie.model";

@Injectable()
export class MoviesService {
  constructor(private firedatabase: AngularFireDatabase) {}

  /**
   * Get All Movies From database
   */
  findAllMovies() {
    return this.firedatabase
      .list("/movies")
      .snapshotChanges()
      .map(response =>
        response.map(movie => {
          let data = movie.payload.toJSON();
          data["id"] = movie.key;
          return data;
        })
      );
  }

  /**
   * Save Movie To database
   * @param movie
   */
  saveMovie(movie: MoviesModel) {
    return this.firedatabase.list("/movies").push(movie);
  }

  /**
   * Delete Movie From database
   * @param id
   */
  deleteMovie(id: string) {
    return this.firedatabase.list(`/movies/${id}`).remove();
  }
}
