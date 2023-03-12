import React, { Component } from 'react';
import Post from '../Post/Post';
import './MainPage.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postArray: []
         }
    }

    // getPost = () => {
    //   let data = [
    //     {
    //       "postId" : "123",
    //       "userName" : "jolly",
    //       "postimageURL" : "https://source.unsplash.com/random",
    //       "timeStamp" : "12:45",
    //       "likes" : "230"
    //     }
    //   ];
    //   this.state({postArray: data});
    // }
  render() {
    return (
      <div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        {/* {
          this.state.postArray.map((item, index)=> (
            <Post id={item.postId} userName={item.userName} postimage={item.postImageURL} likes={item.likes}/>

        ))
        } */}
      </div>
    ) 
  }
}

export default MainPage
