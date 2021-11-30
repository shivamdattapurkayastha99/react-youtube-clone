import React from 'react'
import { Avatar } from '@material-ui/core'
import './VideoCard.css'
function VideoCard({image,title,channel,channelImage,views,timestamp}) {
    return (
        <div className="VideoCard">
            <img /*src={image}*/ src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9d2e8896750899.5eb54f3381452.png" alt="" className="VideoCard_thumbnail" />
            <div className="video_info">
                <div className="video_avatar" ><img alt={channel} /*src={channelImage}*/ src="https://i.ytimg.com/vi/DUJZPpaG4_Q/maxresdefault.jpg" height="60px" width="60px" border-radius="10px"></img></div>
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
