import React from 'react'
import { Avatar } from '@material-ui/core'
function VideoCard({image,title,channel,channelImage}) {
    return (
        <div>
            <img src={image} alt="" />
            <div className="video_info">
                <div className="video_avatar" alt={channel} src={channelImage}></div>
                
            </div>
        </div>
    )
}

export default VideoCard
