import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjAwZjY4YjQ5Y2MyYzZkMWQ0NjQ0ODM1NWRkYmUwYSIsInN1YiI6IjY0NmJjYWE2N2I3YjRkMDBlNGFkZmY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WVrg-68i0pCN9j-oR7sXRw-Cfuq0goF8cCz8n5b_O00'
  }
}

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/changes?page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjAwZjY4YjQ5Y2MyYzZkMWQ0NjQ0ODM1NWRkYmUwYSIsInN1YiI6IjY0NmJjYWE2N2I3YjRkMDBlNGFkZmY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WVrg-68i0pCN9j-oR7sXRw-Cfuq0goF8cCz8n5b_O00'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
// @Injectable({
//   providedIn: 'root'
// })
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
}
