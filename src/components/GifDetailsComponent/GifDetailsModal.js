import React, { Component } from 'react';
import { MDBContainer, MDBModal } from 'mdbreact';
import './style.css';
import facebook from './Images/facebook.gif';
import twitter from './Images/giphy.gif';


class GifModal extends Component {
    constructor(props) {
        super(props)

        console.log(this.props);
        this.state = {
            modal: this.props.modal,
            gif: {}
        }
    }


    componentWillReceiveProps(props) {
        this.setState(props)
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillUnmount() {
        console.log('unmounted');
    }

    render() {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <div className='d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-row flex-xl-row'>
                        <img className="gif" src={this.props.gif.gif} />
                        <div className='m-3 git-desc'>
                            <h5>share</h5>
                            <a href={'https://www.facebook.com/sharer/sharer.php?u=' + this.props.gif.embedUrl} target="_blank"> <img className='social m-1' src={facebook} /></a>
                            <a href={'http://twitter.com/share?url=' + this.props.gif.embedUrl} target='_blank'>
                                <img src={twitter} className='social m-1' />
                            </a>
                            <button className='m-1 copy-btn' onClick={() => navigator.clipboard.writeText(this.props.gif.embedUrl)}>copy  link</button>
                        </div>
                    </div>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default GifModal;