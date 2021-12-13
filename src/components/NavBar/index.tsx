import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../Logo'
import {Link} from "react-scroll"
import { useMediaQuery } from 'react-responsive'
import { deviceSize } from '../responsive'
import {slide as Menu} from "react-burger-menu"
import styles from "./menuStyles"


const NavBarContainer = styled.div`
    width: 90%;
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `}
`

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg: h-full
    lg:w-auto
    flex
    lg:ml-20
    justify-center
    items-center
`

const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-between
    max-h-full
    text-white
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition duration-300
    hover:text-gray-300
    box-content
    mb-2
    lg:mb-0
`

const NavBar = () => {
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
    
    const navItems = () =>{
        return (
                <NavItems>
                        <NavItem>
                            <Link to ="Home" >Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to ="Explore" >Explore</Link>
                        </NavItem>
                        <NavItem>
                            <Link to ="travelPlaces" >Travel Places</Link>
                        </NavItem>
                    </NavItems>
        )
    } 
    
    return (
      <NavBarContainer>
           <Logo/>
           {isMobile && <Menu right styles={styles}>{navItems()}</Menu>}
           {!isMobile && navItems()}
       </NavBarContainer>
    )
}

export default NavBar

