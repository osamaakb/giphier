import GifModel from "../models/GifModel";
//import StickerModel from "../Models/StickerModel"

const API_KEY = "api_key=xXR45rtNp9MpA4a2Q5LziSnkOACSSgmQ&limit=25";

const ERROR_MSG = "API Error: Currently, only gifs are supported. Sorry!";

class GifsRequests {
  static getTrending(itemType, signal) {
    // itemType is here in order to make the api customizable.
    // We will use it as interface to fetch gifs, stickers, etc...

    if (itemType !== "gifs") return Promise.reject(new Error(ERROR_MSG));

    // signal will be used to abort a fetch in useEffect
    return fetch(`https://api.giphy.com/v1/gifs/trending?${API_KEY}`, {
      signal
    })
      .then(response => response.json())
      .then(jsonArr => jsonArr.data.map(gif => new GifModel(gif)))
      .catch(err => console.log(err));
  }

  static getRandom(itemType, signal) {
    if (itemType !== "gifs") return Promise.reject(new Error(ERROR_MSG));

    return fetch(`https://api.giphy.com/v1/gifs/random?${API_KEY}`, { signal })
      .then(response => response.json())
      .then(json => new GifModel(json.data))
      .catch(err => console.log(err));
  }

  static search(query, itemType, signal) {
    if (itemType !== "gifs") return Promise.reject(new Error(ERROR_MSG));

    return fetch(`https://api.giphy.com/v1/gifs/search?${API_KEY}&q=${query}`, {
      signal
    })
      .then(response => response.json())
      .then(jsonArr => jsonArr.data.map(gif => new GifModel(gif)))
      .catch(err => console.log(err));
  }
}
export default GifsRequests;
