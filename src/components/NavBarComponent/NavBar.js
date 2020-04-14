import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import './style.css'
import { Gradient } from 'react-gradient';

const gradients = [
    ['#bd19d6', '#ea7d10'],
    ['#ff2121', '#25c668'],
];

const searchGradient = [
    ['lime', 'coral'],
    ['magenta', 'gold'],
    ['violet', 'royalblue']
];



class NavBar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onSearchText = (query) => {
        this.props.history.push(`/search/${query}`);
        console.log(this.props.history);

    }


    render() {
        return (
            <div>
                <MDBNavbar color="black" dark expand="md" className="z-depth-0">
                    <MDBNavbarBrand>
                        <Gradient
                            gradients={gradients} // required
                            property="text"
                            duration={3000}
                            angle="45deg"
                        >
                            <strong className="white-text">Giphier</strong>
                        </Gradient>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="/random">Random</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Stickers</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <div className="d-flex">
                    <input className="flex-fill" placeholder="Search for gif or sticker"
                        onChange={e => this.onSearchText(e)} />
                    <Gradient
                        gradients={searchGradient} // required
                        property="background"
                        duration={3000}
                        angle="45deg">
                        <div className="search-btn d-flex justify-content-center align-items-center">
                            <MDBIcon className='text-white' icon="search" />
                        </div>
                    </Gradient>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);