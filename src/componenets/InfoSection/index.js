import React from 'react'
import { Button } from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrp, ImgWrp, Img} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
           <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle darkText = {darkText}>{description}</Subtitle>
                                <BtnWrp>
                                    <Button to = 'home'
                                    smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0}
                                    dark = {dark ? 1 : 0} dark2 = {dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrp>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrp>
                                <Img src={img} alt={alt}/>
                            </ImgWrp>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>   
            </InfoContainer> 
        </>
    )
}

export default InfoSection
