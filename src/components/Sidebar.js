import React from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from "@mui/icons-material/History";

import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__row sidebar__row__active">
                <HomeOutlinedIcon />
                <h2>Home</h2>
            </div>
            <div className="sidebar__row">
                <ExploreOutlinedIcon />
                <h2>Explore</h2>
            </div>
            <div className="sidebar__row">
                <WhatshotIcon />
                <h2>Shorts</h2>
            </div>
            <div className="sidebar__row">
                <SubscriptionsOutlinedIcon />
                <h2>Subscription</h2>
            </div>
            <hr />
            <div className="sidebar__row">
                <VideoLibraryOutlinedIcon />
                <h2>Library</h2>
            </div>
            <div className="sidebar__row">
                <HistoryIcon />
                <h2>History</h2>
            </div>
            <div className="sidebar__row">
                <SmartDisplayOutlinedIcon />
                <h2>Your Videos</h2>
            </div>
            <div className="sidebar__row">
                <AccessTimeOutlinedIcon />
                <h2>Watch Later</h2>
            </div>
            <div className="sidebar__row">
                <ThumbUpOffAltOutlinedIcon />
                <h2>Liked Videos</h2>
            </div>
            <div className="sidebar__row">
                <KeyboardArrowDownOutlinedIcon />
                <h2>Show More</h2>
            </div>

        </div>
    )
}

export default Sidebar
