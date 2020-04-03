import React, { Component } from 'react';
import GifsRequests from './GifsRequests';
import GifsList from './GifList';
import './style.css'

class TrendingGifs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        };
    }

    async componentDidMount() {
        let gifs = await GifsRequests.getTrendingGifs();
        this.setState({ gifs })
    }

    render() {
        return (
            <div className='trending'>
                <GifsList gifs={this.state.gifs} onGifClicked={this.props.onGifClicked} />
            </div>
        );
    }
}

export default TrendingGifs;