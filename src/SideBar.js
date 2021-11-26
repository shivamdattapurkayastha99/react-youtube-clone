import React from 'react'
import "./SideBar.css"
import SideBarRow from './SideBarRow'
import HomeIcon from '@material-ui/icons/Home'
import {WhatshotIcon} from '@material-ui/icons/Whatshot'
import {SubscriptionsIcon} from '@material-ui/icons/Subscriptions'
function SideBar() {
    return (
        <div className="sidebar">
            {/* <h2>Sidebar</h2> */}
            <SideBarRow title="Home" Icon={HomeIcon}/>
            <SideBarRow title="Trending" Icon={WhatshotIcon}/>
            <SideBarRow title="Subscription" Icon={SubscriptionsIcon}/>
        </div>
    )
}

export default SideBar
