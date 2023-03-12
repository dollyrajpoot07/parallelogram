import React, { Component } from 'react';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = { }
    } 
    render () {
        return (
            <div className='background'>
                <NavBar />
                <MainContent />
            </div>
         );
    }
}
export default HomePage;
