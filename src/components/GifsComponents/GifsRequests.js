import GifModel from './GifModel'
const API_KEY = 'api_key=xXR45rtNp9MpA4a2Q5LziSnkOACSSgmQ&limit=25';

class GifsRequests {
    static getTrendingGifs() {
        return fetch(`https://api.giphy.com/v1/gifs/trending?${API_KEY}`)
            .then(response => response.json())
            .then(gifsList => gifsList.data.map(gif => new GifModel(gif)))
            .catch(err => console.log(err)
            );
    }

    static getRandomGifs() {
        return fetch(`https://api.giphy.com/v1/gifs/random?${API_KEY}`)
            .then(response => response.json())
            .then(gif => new GifModel(gif.data))
            .catch(err => console.log(err)
            );
    }


    static getSearchedGifs(query) {
        return fetch(`https://api.giphy.com/v1/gifs/search?${API_KEY}&q=${query}`)
            .then(response => response.json())
            .then(gifsList => gifsList.data.map(gif => new GifModel(gif)))
            .catch(err => console.log(err)
            );
    }

}
export default GifsRequests