import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu , SidebarWrapper} from './SidebarElements.js'

const Sidebar = ({toggle, Open}) => {
  return (
    <SidebarContainer Open={Open} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink  to='about'>About</SidebarLink>
                <SidebarLink  to='skills'>Skills</SidebarLink>
                <SidebarLink  to='projects'>Projects</SidebarLink>
            </SidebarMenu>

            
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar