import React, { Component } from 'react';
import './MainContent.css';
import Grid from '@mui/material/Grid';
import ScrolableStoryBar from '../ScrolableStoryBar/ScrolableStoryBar';
import MainPage from '../MainPage/MainPage';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={1}>1st</Grid>
                    <Grid item xs={2}>2nd</Grid>
                    <Grid item xs={6}>
                        <div>
                            <ScrolableStoryBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}>4th</Grid>
                </Grid>
            </div>
        );
    }
}
export default MainContent;