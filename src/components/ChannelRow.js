import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Avatar } from '@mui/material'
import React from 'react'

const ChannelRow = ({ image, channel, verified, numberOfSubscribers, numberOfVideos, description }) => {
    return (
        <div className='channel__row'>
            <Avatar className='channel__row__logo' src={image} alt={channel} />
            <div className="channel__row__text">
                <h4>{channel} &nbsp;{verified && <VerifiedIcon />}</h4>
                <p><strong>{numberOfSubscribers} subscribers • {numberOfVideos} videos</strong></p>
                <p>{description.substr(0, 150)}{description.length > 149 ? "..." : ""}</p>
            </div>

        </div>
    )
}

export default ChannelRow
