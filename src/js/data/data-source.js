// import axios from "axios";
// import { discoverUrl, searchUrl } from "./instance.js";

// class DataSource {
//   static searchMovies(keyword) {
//     return axios
//       .get(searchUrl + encodeURIComponent(keyword).replace(/%20/g, "+"))
//       .then((response) => {
//         return response.data.results;
//       })
//       .then((response) => {
//         if (response) {
//           console.log(response);
//           return Promise.resolve(response);
//         } else {
//           return Promise.reject(`${keyword} is not found`);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

// }

// export default DataSource;
