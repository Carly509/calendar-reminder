import axios from "axios";

export default axios.create({
  //   baseURL: "http://dataservice.accuweather.com/locations/v1/cities/search",
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
});
