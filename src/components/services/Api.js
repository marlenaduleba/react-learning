// services/api.js
import axios from "axios";



export const fetchArticlesWithQuery = async searchQuery => {
    const response = await axios.get(`/search?query=${searchQuery}`);
    console.log(response);
    return response.data.hits;
  };

