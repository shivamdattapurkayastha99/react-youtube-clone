import React from 'react'
// import HomeIcon from "@material-ui/icons/Home"
import "./SideBarRow.css"
function SideBarRow({Icon,title}) {
    return (
        <div className="sidebarRow">
            {/* <HomeIcon/> */}
            {/* <div className={`sidebarRow ${selected&&"selected"}` }>
            <Icon className="sidebarRow_icon"/> */}

            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    )
}

export default SideBarRow
