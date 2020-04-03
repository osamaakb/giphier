class GifModel {
    constructor(json) {
        this.id = json.id;
        this.url = json.url;
        this.title = json.title;
        this.username = json.username;
        this.embedUrl = json.embed_url;
        this.gif = json.images.downsized_large.url
    }
}

export default GifModel