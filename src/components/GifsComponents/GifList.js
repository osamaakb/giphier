import GifsItem from './GifItem';
import React from 'react';

const GifList = props => {
    return (
        <div className='row m-2 text-center'>  {props.gifs.map(gif => <GifsItem key={gif.id} gif={gif}
            onGifClicked={props.onGifClicked} />)} </div>
    );
}

export default GifList;