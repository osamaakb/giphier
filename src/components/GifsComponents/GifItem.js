import React from 'react';
import './style.css'
const GifItem = props => {

    function openGifDetails() {
        props.onGifClicked(props.gif)
    }

    return (
        <div className='col-lg-3 col-md-3 col-sm-4 col-6 p-2 d-flex justify-content-center align-items-center'>
            <a onClick={openGifDetails}><img className='gif-item img-fluid' src={props.gif.gif} /></a>
        </div>
    );
}

export default GifItem;