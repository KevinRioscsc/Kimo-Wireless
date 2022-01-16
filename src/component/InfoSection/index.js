import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine,Heading, Subtitle, BtnWrap, ImgWrap, Img, VideoPlayer } from './InfoElements'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, video1, alt, dark , dark2,primary}) => {
    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headLine}</Heading>
                                <Subtitle darkText= {darkText}>{description}</Subtitle>
                                
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                              <VideoPlayer autoPlay loop muted src = {video1} type = 'video/mp4'/>
                            </ImgWrap>
                            
                        </Column2>
                    </InfoRow>
                </InfoWrapper>    
            </InfoContainer>  
        </>
    )
}

export default InfoSection
