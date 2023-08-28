import axios from "axios";

const axiosMusic = axios.create({
  baseURL: "https://playlist-share-dev.fl0.io"
})


export {
  axiosMusic
}