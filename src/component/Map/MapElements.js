import styled from "styled-components";

export const MapContainer = styled.div`
    background: #f9f9f9;

    @media screen and (max-width:768px){
        padding:100px 0;
    }
`;

export const MapWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 24px;
    justify-content:center;
`;
export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto, 1fr);
    align-items:center;
    
    grid-template-areas: 'col2 col1';

    @media screen and (max-width:768px){
        grid-template-areas: 'col1' 'col2';
    }
`;
export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;
`;
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area:col2;
`;
export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
`;
export const Top = styled.p`
    color:#01bf71;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
`;
export const HeadLine = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color:#010606;

    @media screen and (max-width:480px){
        font-size:32px;
    }
`;
export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:#010606;
`;
export const MapWrap = styled.div`
    max-width:555px;
    box-shadow: 12px 12px 2px 1px #01bf71;
    height:100%;
`;
