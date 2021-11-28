import React from 'react'
import "./SideBar.css"
import SideBarRow from './SideBarRow'
import HomeIcon from '@material-ui/icons/Home'
import {WhatshotIcon} from '@material-ui/icons/Whatshot'
import {SubscriptionsIcon} from '@material-ui/icons/Subscriptions'
import {VideoLibraryIcon} from '@material-ui/icons/VideoLibrary'
import {HistoryIcon} from '@material-ui/icons/History'
import {OnDemandVideoIcon} from '@material-ui/icons/OndemandVideo'
import {WatchLaterIcon} from '@material-ui/icons/WatchLater'
import {ThumbUpAltOutlinedIcon} from '@material-ui/icons/ThumbUpAlt'
// import SideBarRow from './SideBarRow'
function SideBar() {
    return (
        <div className="sidebar">
            {/* <h2>Sidebar</h2> */}
            <SideBarRow selected  title="Home" Icon={HomeIcon}/>
            <SideBarRow title="Trending" Icon={WhatshotIcon}/>
            <SideBarRow title="Subscription" Icon={SubscriptionsIcon}/>
            <hr/>
            <SideBarRow  Icon={VideoLibraryIcon} title="Library"/>
            <SideBarRow  Icon={HistoryIcon} title="History"/>
            <SideBarRow  Icon={OnDemandVideoIcon} title="OnDemandVideo"/>
            <SideBarRow  Icon={WatchLaterIcon} title="WatchLater"/>
            <SideBarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            
            
        </div>
    )
}

export default SideBar
