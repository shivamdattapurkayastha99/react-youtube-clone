import React from 'react'
import './RecommendedVideos.css'
import SideBarRow from './SideBarRow'
import VideoCard from './VideoCard'
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h1>Recommended Videos</h1>
            {/* <SideBarRow title="Home"/>
            <SideBarRow title="Trending"/>
            <SideBarRow title="Subscription"/> */}
            <div className="recommendedVideos_videos">
                
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>


            </div>
            
        </div>
    )
}

export default RecommendedVideos
