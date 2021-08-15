// import movies from "./movies.js";
// import axios from "axios";
class DataSource {
  static searchMovies(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8a7e4914d776967d634c1ac85bb1b244&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((response) => {
        return (response.json());
      })
      .then((responseJson) => {
        if (responseJson.results) {
          console.log(responseJson.results);
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
  // static getAllMovie() {

  // }
}

export default DataSource;

// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }

// class DataSource {
//     constructor(onSuccess, onFailed){
//         this.onSuccess = onSuccess,
//         this.onFailed = onFailed
//     }

//     searchClubs (keyword) {
//         const filteredClubs = clubs.filter((club) => {
//             return club.name.toUpperCase().includes(keyword.toUpperCase())
//         })

//         if(filteredClubs.length) {
//             this.onSuccess(filteredClubs)
//         } else {
//             this.onFailed(`${keyword} data not found.`)
//         }
//     }
// }

// DataSource.prototype.searchClub = function(keyword) {

//     const filteredClubs = clubs.filter((club) => {
//         return club.name.toUpperCase().includes(keyword.toUpperCase());
//     })

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         this.onFailed(keyword + " is not found");
//     }
// };
