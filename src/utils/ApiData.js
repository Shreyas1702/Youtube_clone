import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: "BASE_URL",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "92809d61f6msh9c29a4ddb775e1dp1b0e02jsnadb32022162b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
