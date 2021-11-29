import React from 'react'
import { Avatar } from '@material-ui/core'
function VideoCard({image,title,channel,channelImage,views,timestamp}) {
    return (
        <div className="VideoCard">
            <img src={image} alt="" />
            <div className="video_info">
                <div className="video_avatar" alt={channel} src={channelImage}></div>
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}.{timestamp}

                    </p>
                </div>
                
                
            </div>
        </div>
    )
}

export default VideoCard
