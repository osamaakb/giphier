import React, { useState, useEffect } from 'react';
import GifsRequests from './GifsRequests';
import './style.css'
import GifModal from '../GifDetailsComponent/GifDetailsModal';


const RandomGifs = props => {
    const [gif, setGif] = useState({});
    let isNew = props.new;

    console.log('creating again');

    useEffect(() => {

        GifsRequests.getRandomGifs().then(res => {
            isNew = false;
            return setGif(res)
        });
    }, [])

    return (
        <>
            <GifModal modal={gif != {}} gif={gif} />
        </>
    );
}



export default RandomGifs;









// import React, { Component } from 'react';
// import GifsRequests from './GifsRequests';
// import './style.css'
// import GifModal from '../GifDetailsComponent/GifDetailsModal';

// class RandomGifs extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             gif: {}
//         };
//     }

//     async componentDidMount() {
//         let gif = await GifsRequests.getRandomGifs();
//         this.setState({ gif })
//     }



//     render() {
//         console.log('here');

//         return (
//             <>
//                 <GifModal modal={true} gif={this.state.gif} />
//             </>
//         );
//     }
// }

// export default RandomGifs;