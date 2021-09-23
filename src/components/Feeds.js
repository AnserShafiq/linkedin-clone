import React,{useState,useEffect} from 'react';
import FeedsInput from './FeedsInput';
import FeedPost from './FeedPost';
import {db} from '../firestore';
import "../assets/styles/Feeds.css";
import FlipMove from "react-flip-move";

const Feeds = () => {

    const [Posts,setPosts]=useState([]);

    useEffect(()=>{
        db.collection("posts")
        .orderBy("publishedAt", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              Avatar: doc.data().Avatar,
              Description: doc.data().Description,
              Message: doc.data().Message,
              Name: doc.data().Name,
              id: doc.id,
            }))
          )
        );
    },[]);

    useEffect(()=>{
        console.log(Posts)
    },[Posts]);

    return (
        <div className='feeds'>
            <FeedsInput />
            
            <FlipMove>
              {Posts && Posts.map((e)=>(
                  <FeedPost 
                  Avatar={e.Avatar}
                  Description={e.Description}
                  Message={e.Message}
                  Name={e.Name}/>
              ))}
            </FlipMove>
        </div>
    );
}

export default Feeds
