import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { TokenInterceptor } from './utils/token.interceptor';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SearchComponent } from './pages/search/search.component';
import { StoreModule } from '@ngrx/store';
import { reducers, reducerToken } from './stores/reducer-entry';
import { Stores } from './stores/stores.entry';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './stores/movies/movies.effects';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    MovieDetailComponent,
    MovieCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot([MoviesEffects]),
    MaterialComponents
  ],
  providers: [
    Stores,
    { provide: reducerToken, useValue: reducers },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
