import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Video = ({ title, image, channel, channelImage, views, timestamp }) => {
    return (
        <div className="video">
            <Link to="/">
                <img className='video__image' src={image} alt="" />
                <div className="video__info">
                    <Avatar className='video__avatar' src={channelImage} alt={channel} />
                    <div className="video__text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>{views} • {timestamp}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Video
