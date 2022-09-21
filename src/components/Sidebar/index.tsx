import React from 'react'
import * as k from './styles.js'

type Props = {
    toggle?: any;
    Open:boolean;
}

const Sidebar = ({toggle, Open}:Props) => {
  return (
    <k.SidebarContainer Open={Open} onClick={toggle}>
        <k.Icon onClick={toggle}>
            <k.CloseIcon/>
        </k.Icon>

        <k.SidebarWrapper>
            <k.SidebarMenu>
                <k.SidebarLink  to='/'>Home</k.SidebarLink>
                <k.SidebarLink  to='/projects'>Projects</k.SidebarLink>
                <k.SidebarLink  to='/about'>About</k.SidebarLink>
                <k.SidebarLink  to='/contact'>Contact</k.SidebarLink>
                <k.SidebarLink  to='/skills'>Skills</k.SidebarLink>
            </k.SidebarMenu>
        </k.SidebarWrapper>
    </k.SidebarContainer>
  )
}

export default Sidebar