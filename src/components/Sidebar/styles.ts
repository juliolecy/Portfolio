import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkRouter} from 'react-router-dom'

interface Props{
    Open:boolean;
}
export const SidebarContainer = styled.aside<Props>`
    position: fixed;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({Open}) => (Open ? 1 : 0)};
    top: ${({Open}) => (Open? 0 : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
    display: flex;
    justify-content: center;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 40px);
    text-align: center;

    @media screen and (max-width: 768px){
        grid-template-rows: repeat(6, 60px);

    }
`

export const SidebarLink = styled(LinkRouter)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style:none;
    transition: .2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    width: 200px;
    margin-bottom: 25px;

    &:hover{
        color: black;
        transition: .2s ease-in-out;
        background-color: white;
        border-radius:25px;
    }
`
