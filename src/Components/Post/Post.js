import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './Post.css';
import image1 from '../ScrolableStoryBar/IMAGES/testimg6.jpg';
import image2 from '../ScrolableStoryBar/IMAGES/testimg23.png.jpg';
import image3 from '../ScrolableStoryBar/IMAGES/heart_dislike.png';
import share from '../ScrolableStoryBar/IMAGES/share.png';
import comment from '../ScrolableStoryBar/IMAGES/comment.png';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='post_container'>

                {/* Header */}
                <div className='post_header'>
                    <Avatar className="post_image" src={image1} />
                    <div className='post_username'>me_jaku</div>
                </div>

                {/* Image */}
                <div className='images'>
                    <img src={image2} width="615px" alt=''/>
                    {/* <img className=" post_test_unsplash_image" src="https://source.unsplash.com/random"  width="615px" alt='unsplash random picture'/> */}
                </div>

                {/* Data/like share and comment */}
                <div className=" post_likeShareComment">
                    <img src={image3} className='post_reaction_image'  alt=''/>
                    <img src={comment} className='post_reaction_image' alt=''/>
                    <img src={share} className='post_reaction_image' alt=''/>
                </div>
                <div className='post_likesCount'>
                    121 likes
                </div>
                <div>
                    <div className='post_comment'>
                        <span className='post_username'>samiksh@</span>
                        Hey what's this?
                    </div>
                    <div className='post_comment'>
                        <span className='post_username'>samiksh@</span>
                        is it?
                    </div>
                    <div className='post_comment'>
                        hain! really?
                    </div>
                    <input text="text" className='post_commentBox' placeholder='Add a comment...'/>
                </div>

            </div>
        )
    }
}

export default Post;