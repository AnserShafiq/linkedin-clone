import React from 'react';
import { Avatar } from '@material-ui/core';
import "../assets/styles/Sidebar.css";
import Background from "../assets/Images/bgImage.jpeg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Sidebar = () => {
    const user = useSelector(selectUser);
    const RecentItems = ({ title }) => {
        return (
          <div>
            <p className="hashtags"> # {title} </p>
          </div>
        );
      };
      console.log(user);
    return (
        <div className='cardAtLeft'>
            <div className='leftBarOne'>
                <img src={Background} alt=""/>
                <div className='avatarContainer'>
                    <Avatar src={user.ProfileURL} ></Avatar>
                </div>

                <div className='infoToShow'>
                    <h4>{user.FullName}</h4>
                    <p>{user.Email}</p>
                </div>

                <div className='detailsSection'>
                    <div className='detailBody'>
                        <p  className='statsDisplay'>Who Viewed Your Profile </p>
                        <p className='Number'>51</p>
                    </div>
                    <div className='detailBody'>
                        <p  className='statsDisplay'>Views Of Your Post </p>
                        <p className='Number'>138</p>
                    </div>
                </div>


            </div>
            <div className="sidebarLeft_Recent">
                <h4>Recent</h4>
                <RecentItems title="Career join" />
                <RecentItems title="Dubai Recruitment" />
                <RecentItems title="recruitement" />
                <RecentItems title="islamabad" />
                <RecentItems title="ios" />
            </div>    
        </div>
    )
}

export default Sidebar
