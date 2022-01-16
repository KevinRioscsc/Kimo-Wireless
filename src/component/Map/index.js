import React from 'react'
import { MapContainer, MapWrapper, InfoRow, Column1, Column2, MapWrap, TextWrapper, Top, HeadLine, Subtitle } from './MapElements'

const Map = () => {
    return (
        <>
            <MapContainer id = 'discover'>
                <MapWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Top>Visit us</Top>
                                <HeadLine>Come visit us to get started</HeadLine>
                                <Subtitle>All consultations are made through phone, email, or in person. Repairs are done in person and we accept every form of payment!</Subtitle>
                            </TextWrapper>
                            
                        </Column1>
                        <Column2>
                        <   MapWrap>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26498.95174022461!2d-118.1252862151204!3d33.8801501517008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd32bac279fb51%3A0xee71220709565a3d!2s17001%20Bellflower%20Blvd%2C%20Bellflower%2C%20CA%2090706!5e0!3m2!1sen!2sus!4v1637094309424!5m2!1sen!2sus" width= '100%' height = '400' style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                            </MapWrap>
                        </Column2>
                    </InfoRow>
                </MapWrapper>
            </MapContainer>
        </>
    )
}

export default Map
