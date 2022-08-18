import { Avatar } from '@mui/material'
import React from 'react'

const VideoRow = ({ title, image, channel, channelImage, views, timestamp, description }) => {
    return (
        <div className='video__row'>
            <img src={image} alt="" />

            <div className="video__row__text">
                <h3>{title} </h3>
                <p>{views} • {timestamp}</p>
                <div className="video__row__channel">
                    <Avatar className='video__row__logo' src={channelImage} alt={channel} /> &nbsp;
                    <p>{channel}</p>
                </div>
                <p>{description.substr(0, 150)}{description.length > 149 ? "..." : ""}</p>
            </div>

        </div>
    )
}

export default VideoRow
