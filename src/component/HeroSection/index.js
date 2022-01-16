import React, {useState} from 'react'
import Video from '../../video/Video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElement';

export const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const isHover = () =>{
        setHover(!hover);
    };

    return (
        <HeroContainer id = "Home">
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Kimo Wireless</HeroH1>
                <HeroP>
                    Visit us today to get started on your first repair or learn more about us
                </HeroP>
                <HeroBtnWrapper>
                    <Button to = 'signup' onMouseEnter = {isHover} onMouseLeave = {isHover} primary='true' dark = 'true'>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
