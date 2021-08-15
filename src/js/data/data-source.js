import movies from "./movies.js";

class DataSource {
  static searchMovies(keyword) {
    return new Promise((resolve, reject) => {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toUpperCase().includes(keyword.toUpperCase())
      );
      if (filteredMovies.length) {
        resolve(filteredMovies);
      } else {
        reject(`${keyword} is not found`);
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
