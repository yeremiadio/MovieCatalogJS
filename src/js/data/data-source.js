import axios from "axios";

const url = `https://api.themoviedb.org/3/discover/movie?api_key=8a7e4914d776967d634c1ac85bb1b244`
class DataSource {
  static searchMovies(keyword) {
    return axios.get(
      `${url}`
    ).then((response) => {
      return response.data.results;
    })
      .then((response) => {
        if (response) {
          console.log(response);
          return Promise.resolve(response);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      }).catch((error) => {
        console.log(error)
      })
  }
}

export default DataSource;
