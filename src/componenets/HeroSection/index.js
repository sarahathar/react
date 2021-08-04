import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, Welcome!</HeroH1>
                <HeroP>Get to know more about me and what's going on in my life.</HeroP>
                <HeroBtnWrapper>
                    <Button to="email" onMouseEnter ={onHover}  onMouseLeave ={onHover} primary='true' dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Interested, Email Me! {hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>

                </HeroBtnWrapper>
            </HeroContent>/
        </HeroContainer>
    )
}

                   
export default HeroSection
