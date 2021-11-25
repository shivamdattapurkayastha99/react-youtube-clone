import React from 'react'
import './RecommendedVideos.css'
import SideBarRow from './SideBarRow'
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h1>Recommended Videos</h1>
            <SideBarRow title="Home"/>
            <SideBarRow title="Trending"/>
            <SideBarRow title="Subscription"/>
            
        </div>
    )
}

export default RecommendedVideos
