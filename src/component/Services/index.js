import React from 'react'
import Icon1 from "../../images/svg4.svg"
import Icon2 from "../../images/svg5.svg"
import Icon3 from "../../images/svg6.svg"
import { ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP, ServicesH2 } from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id = "services">
                <ServicesH1>
                    Our Services
                </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src = {Icon1}/>
                        <ServicesH2>IPhones and Androids</ServicesH2>
                        <ServicesP>We fix a variety of phones, but our primary focus is on IPhones and Androids</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src = {Icon2}/>
                        <ServicesH2>Computer and Laptops</ServicesH2>
                        <ServicesP>Laptop is running a little slow. Bring it to us to clean it or get that old laptop working again!</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src = {Icon3}/>
                        <ServicesH2>Gaming Consoles</ServicesH2>
                        <ServicesP>Console is running a bit slow or just doesn't want to work. Bring it to Kimo for a full repair!</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
