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
                
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>
            <VideoCard title="Image Recognition Video-5" views="63" channelImage="D:/placement_documents/resumeimage.jpg" timestamp="3 days ago" channel="Shivam Datta" image="E:/my youtube channel/thumbnails/opencvlogo.png"/>


            </div>
            
        </div>
    )
}

export default RecommendedVideos
