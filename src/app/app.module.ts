import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from "./app.component";
import { MovieFormComponent } from "./components/movie-form/movie-form.component";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { MoviesService } from "./services/movies.service";
import { MoviesComponent } from "./components/movies/movies.component";
import AppRouterModule from "./app.router";

@NgModule({
  declarations: [AppComponent, MovieFormComponent, MoviesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRouterModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
