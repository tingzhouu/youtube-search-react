import axios from "axios";

const KEY = "AIzaSyDG_zAkDUou_ecNJv1xleDD4IeKbIB8Rjg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  }
});