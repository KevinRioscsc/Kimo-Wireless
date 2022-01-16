import React from 'react'
import {FaFacebook, FaInstagram, FaGoogle,FaYelp} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
     FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia, SocialMediaWrap, SocialLogo,WebsiteRights,SocialIcons, SocialIconLink  } from './FooterElements'
import Navbar from '../Navbar'

const Footer = () => {
    return (
        <>
             <FooterContainer>
                 <FooterWrap>
                     <FooterLinksContainer>
                         <FooterLinksWrapper>
                             <FooterLinkItems>
                                 <FooterLinkTitle> About Us</FooterLinkTitle>
                                     <FooterLink to = "discover">
                                        Company
                                     </FooterLink>
                                     <FooterLink to = "/signin">
                                        Services
                                     </FooterLink>
                                     <FooterLink to = "/signin">
                                        Discover
                                     </FooterLink>
                                     <FooterLink to = "/signin">
                                        About
                                     </FooterLink>
                                     <FooterLink to = "/signin">
                                        Terms of Service
                                     </FooterLink>
                                 
                             </FooterLinkItems>
                             
                             
                         </FooterLinksWrapper>
                         <FooterLinksWrapper>
                             <FooterLinkItems>
                                 <FooterLinkTitle> Contact Us</FooterLinkTitle>
                                     <FooterLink to = "/signin">
                                        17001 Bellflower Blvd, Bellflower, CA 90706
                                     </FooterLink>
                                     <FooterLink to = "/signin">
                                        (562-866-2166)
                                     </FooterLink>
                                     <FooterLink to = "/signin">
                                        sgtofaeea@gmail.com
                                     </FooterLink>
                                     
                                 
                             </FooterLinkItems>
                             
                         </FooterLinksWrapper>
                     </FooterLinksContainer>
                     <SocialMedia>
                         <SocialMediaWrap>
                             <SocialLogo to = "/">
                                Kimo Wireless
                             </SocialLogo>
                             <WebsiteRights>Komi Wireless © 2021 
                              All rights reserved.</WebsiteRights>
                             <SocialIcons>
                                 <SocialIconLink href = "https://www.facebook.com/pages/category/Mobile-Phone-Shop/Kimo-Wireless-233966509967161/" target = "_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                                 <SocialIconLink href = "/" target = "_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                                 <SocialIconLink href = "https://www.yelp.com/biz/kimo-wireless-bellflower" target = "_blank" aria-label="Yelp"><FaYelp/></SocialIconLink>
                                 <SocialIconLink href = "https://www.google.com/search?q=kimo+wireless&client=opera-gx&hs=Xia&sxsrf=AOaemvK2z3uN3ozWjxWMCI64o3-R9PibVw%3A1637201593358&ei=ubaVYaOlFZPR9AOIvbm4Bg&ved=0ahUKEwjj5Zab66D0AhWTKH0KHYheDmcQ4dUDCA0&uact=5&oq=kimo+wireless&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCwguEIAEEMcBEK8BMgYIABAWEB4yAggmOgcIIxCwAxAnSgQIQRgBUOMEWLkJYPoMaAFwAHgAgAF0iAHWA5IBAzQuMZgBAKABAcgBAcABAQ&sclient=gws-wiz" target = "_blank" aria-label="Google"><FaGoogle/></SocialIconLink>
                             </SocialIcons>
                         </SocialMediaWrap>
                     </SocialMedia>
                 </FooterWrap>
             </FooterContainer>
        </>
    )
}

export default Footer
