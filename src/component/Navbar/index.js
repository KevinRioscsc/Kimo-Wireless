import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';


import {
    Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn, NavBtnLink} from './NavbarElements'

export const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false);
        }
    }
    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    
                        <NavLogo to='/' onClick = {toggleHome}>
                                Kimo
                        </NavLogo>
                   
                        
                   
                    <MobileIcon onClick = {toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to = "signup" smooth = {true} duration = {500} spy = {true} exact = 'true' offset={-80} activeStyle={{ color:'red' }}>
                                About
                            </NavLinks>
                            <NavLinks to = "discover" smooth = {true} duration = {500} spy = {true} exact = 'true' offset={-80}>
                                Discover
                            </NavLinks>
                            <NavLinks to = "services" smooth = {true} duration = {500} spy = {true} exact = 'true' offset={-80}>
                                Services
                            </NavLinks>
                            <NavLinks to = "about" smooth = {true} duration = {500} spy = {true} exact = 'true' offset={-80}>
                                Quality
                            </NavLinks>
                            
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                                <NavBtnLink to = "discover" smooth = {true} duration = {500} spy = {true} exact = 'true' offset={-80}>
                                    Learn More
                                </NavBtnLink>
                            </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};



export default Navbar
