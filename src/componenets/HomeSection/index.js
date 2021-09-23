import React, {useState} from 'react'
import {HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, HomeBlobImage, HomeRowContainer, ArrowForward, ArrowRight, HomeH3, HomeBlob, HomeSocialIcon, HomeSocialContainer} from './HomeElements';
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements';

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (

        <HomeContainer id="home">
            
            <HomeRowContainer>
                <div>          
                <HomeBlobImage x='12' class= "home__blog-img"  src={require("../../images/Untitled design (2).png").default} />      
                {/* <HomeBlob viewBox="0 0 200 187" >
                    <mask id="mask0" mask-type="alpha">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    </mask>
                    <g mask="url(#mask0)">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        <HomeBlobImage x='12' class= "home__blog-img"  xlinkHref={require("../../images/image.jpg").default} />
                    </g>

                    
                </HomeBlob> */}

                <HomeContent>
                
                <HomeH1>Hi, I am Sarah!</HomeH1>
                <HomeH3>A Junior majoring in Computer Science, at University of Illinois at Chicago.</HomeH3>
                <HomeP>Passionate and Driven towards my career, my interests lie in Machine Learning and Artificial Intelligence.</HomeP>
                <HomeBtnWrapper>
                    <Button to="contact" onMouseEnter ={onHover}  onMouseLeave ={onHover} primary='true' dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Interested, Contact Me! {hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>

                </HomeBtnWrapper>
                </HomeContent>
                </div>
                <HomeSocialContainer>
                    <HomeSocialIcon href="https://www.linkedin.com/in/sarah-athar/" target = "_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </HomeSocialIcon>

                    <HomeSocialIcon href="mailto:sarahathar2001@yahoo.com" target = "_blank" >
                        <i class="uil uil-envelope"></i>
                    </HomeSocialIcon>

                    <HomeSocialIcon href="https://github.com/sarahathar" target = "_blank">
                        <i class="uil uil-github-alt"></i>
                    </HomeSocialIcon>
                </HomeSocialContainer>

            </HomeRowContainer>
        </HomeContainer>
    )
}

                   
export default HomeSection
