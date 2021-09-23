import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import "../assets/styles/Feeds.css";
import FeedsButtons from './FeedsButtons';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import firebase from 'firebase';
import {db} from "../firestore";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const FeedsInput = () => {
    const user = useSelector(selectUser);

    const [enteredPost,setEnteredPost]= useState("");

    const inputChange=(event)=>{
        setEnteredPost(event.target.value)
    };
    // console.log(user);
    const postHandler=(e)=>{
        e.preventDefault();
        db.collection("posts")
        .add({
            Name:user.FullName,
            Description:user.Email,
            Message:enteredPost,
            Avatar:user.ProfileURL === null ? <Avatar /> :user.ProfileURL,
            publishedAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .catch(() =>
            alert("OOPS! there was an error storing the data on the database.")
        );
     setEnteredPost("");
    };
    return (
        <div className='feedHead'>
           <div className='feedHead_Upper'>
                <Avatar src={user.ProfileURL}></Avatar>
                <div className='inputSection'>
                    <form>
                        <input type='text' 
                        className="textArea"
                        placeholder='Submit Text Here'
                        value={enteredPost} 
                        onChange={inputChange} />
                        <input type='submit' onClick={postHandler} style={{display:'none'}}/>
                    </form>
                </div>
           </div>
            <div className='feedHead_Lower'>
                <FeedsButtons title='Photo' Icon={PhotoIcon} color='#70B5F9' />
                <FeedsButtons title='Video' Icon={YouTubeIcon} color='#7FC15E' />
                <FeedsButtons title='Event' Icon={EventAvailableIcon} color='#E7A33E' />
                <FeedsButtons title='Write Article' Icon={FormatIndentIncreaseIcon} color='#FC9295' />
            </div>
        </div>
    )
}

export default FeedsInput
