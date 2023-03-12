import React, { Component } from 'react';
import './NavBar.css';
import Grid from '@mui/material/Grid';
import Parallelogram from '../HomePage/Parallelogram.png';
import home from './home.png';
import chat from './chat.png';
import search from './search.png';
import follow from './follow.png';
import Avatar from '@mui/material/Avatar';
import Profile from './Dolly_Avatar.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <div className='navbar_barContent'>
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3} >
                            <img className = "navbar_logo" src ={Parallelogram}  width= "150px" alt = "Parallelogram logo" />
                        </Grid>
                        <Grid item xs={3}>
                            <input text= "text" placeholder='Search' className='navbar_searchbar'/>
                        </Grid>
                        <Grid item xs={3} className="navbar_top">
                        <img className = "navbar_img" src ={home}  width= "25px" alt = "home icon"/>
                        <img className = "navbar_img" src ={chat}  width= "25px" alt = "chat icon"/>
                        <img className = "navbar_img" src ={search}  width= "25px" alt = "search icon"/>
                        <img className = "navbar_img" src ={follow}  width= "25px" alt = "follow icon"/>
                        <Avatar className = "navbar_img" src={Profile} style= {{"maxWidth": "25px", "maxHeight": "25px"}}></Avatar>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default NavBar;