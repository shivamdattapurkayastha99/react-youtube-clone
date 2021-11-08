import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/NotificationImportant'
import { Avatar } from '@material-ui/core'
function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png" alt="yt" className="header_logo"></img>
            </div>
            <div className="header_input">
                <input type="text" name="" id="" />
                <SearchIcon/>
            </div>
            <div className="header_icons">
            <VideoCallIcon/>
            <AppsIcon/>
            <NotificationsIcon/>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEnP4CjCPZcgw/profile-displayphoto-shrink_200_200/0/1600079811803?e=1638403200&v=beta&t=OAyuuI0BNjAHg5-ySkLkF2vKlP86e__AVn8_G-YNWKs"/>
            </div>
            
            
        </div>
    )
}

export default Header
