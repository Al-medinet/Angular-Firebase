import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieFormComponent } from "./components/movie-form/movie-form.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "movies",
        pathMatch: "full"
      },
      { path: "movies", component: MoviesComponent },
      { path: "movies/new", component: MovieFormComponent }
    ])
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule]
})
export default class AppRouterModule {
  constructor() {}
}
