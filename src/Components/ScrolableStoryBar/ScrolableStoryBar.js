import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './ScrolableStoryBar.css';
import image1 from './IMAGES/testimg2.png';
import image2 from './IMAGES/testimg6.jpg';
import image3 from './IMAGES/testimg10.jpg';
import image4 from './IMAGES/testimg11.jpg';
import image5 from './IMAGES/testimg12.jpg';
import image6 from './IMAGES/testimg13.jpg';
import image7 from './IMAGES/testimg14.jpg';
import image8 from './IMAGES/testimg15.jpg';
import image9 from './IMAGES/testimg16.jpg';
import image10 from './IMAGES/testimg17.jpg';
import image11 from './IMAGES/testimg18.jpg';
import image12 from './IMAGES/testimg19.jpg';
import image13 from './IMAGES/testimg20.jpg';
import image14 from './IMAGES/testimg21.jpg';
import image15 from './IMAGES/testimg22.jpg';


export class ScrolableStoryBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
  render() {
    return (
      <div className='storybar_container'>
        <div className='story'>
          <Avatar className = "storybar_story" src={image1} />
          <div className='storyid_text'>antra@</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image2} />
          <div className='storyid_text'>me_jaku</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image3} />
          <div className='storyid_text'>ajay_12</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image4} />
          <div className='storyid_text'>samiksh@</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image5} />
          <div className='storyid_text'>jaideep</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image6} />
          <div className='storyid_text'>life@prsnt</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image7} />
          <div className='storyid_text'>aparna221</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image8} />
          <div className='storyid_text'>suf!</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image9} />
          <div className='storyid_text'>swamiyami</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image10} />
          <div className='storyid_text'>panditom</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image11} />
          <div className='storyid_text'>tailorz</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image12} />
          <div className='storyid_text'>insrchof</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image13} />
          <div className='storyid_text'>wehere</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image14} />
          <div className='storyid_text'>hania</div>
        </div>
        <div className='story'>
          <Avatar className = "storybar_story" src={image15} />
          <div className='storyid_text'>pristha</div>
        </div>
      </div>
    )
  }
}

export default ScrolableStoryBar