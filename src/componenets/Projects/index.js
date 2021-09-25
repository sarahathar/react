import React , {useState}from 'react'

import {ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP, ProjectsTitle, ArrowForward, ArrowRight
    } from './ProjectElements';



    import { Swiper, SwiperSlide } from "swiper/react";
    import {Button} from '../ButtonElements';

    import "swiper/swiper.min.css";
    import "swiper/components/pagination/pagination.min.css"
    import "swiper/components/navigation/navigation.min.css"
    
    import "./styles.css";

    import SwiperCore, {
        Keyboard,Pagination,Navigation
    } from 'swiper/core';
    
    // install Swiper modules
    SwiperCore.use([Keyboard,Pagination,Navigation]);
    
const Projects = () => {


  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  }

    return (
        <ProjectsContainer id ="projects">


<ProjectsH1>Projects</ProjectsH1>
             <ProjectsTitle>Summary of my work</ProjectsTitle>

    <Swiper slidesPerView={1} spaceBetween={30} keyboard={{  "enabled": true}} pagination={{  "clickable": true}} navigation={true} className="mySwiper">
    
    <SwiperSlide>
     <ProjectsH2>SecureML-Privacy-Preserving-Linear-Regression</ProjectsH2>
      <ProjectsP>Implemented the Online Phase of a Secure Machine Learning Protocol to Compute a Two-Party Linear Regression Model. Consolidated the work into a single C++ program, to emphasize the previously
      developed techniques for secure arithmetic operations and trained a secure linear regression model using the MNIST database.</ProjectsP>

      <a  href="https://github.com/sarahathar/SecureML-Privacy-Preserving-Linear-Regression" target = "_blank" onMouseEnter ={onHover}  onMouseLeave ={onHover}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} class="button button--flex button--small button--link services__button">
      Check it out!
      {hover ? <ArrowForward/> : <ArrowRight/> }
  
          {/* <i class="uil uil-arrow-right button__icon"></i> */}
      </a>
      </SwiperSlide>

    <SwiperSlide>

      <ProjectsH2>15 Puzzle</ProjectsH2>
      <ProjectsP>JavaFX Program allowing users to solve the 15 Puzzle, either themselves or by using the AI Algorithm, A*, to help assist them
          by calculating the 10 next moves.</ProjectsP>

      {/* <span class="button button--flex button--small button--link services__button">
              Check it out!
  
          <i class="uil uil-arrow-right button__icon"></i>
      </span> */}

      <a href="mailto:sarahathar2001@yahoo.com" target = "_blank" onMouseEnter ={onHover}  onMouseLeave ={onHover}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} class="button button--flex button--small button--link services__button">
      Email to see!
      {hover ? <ArrowForward/> : <ArrowRight/> }
  
          {/* <i class="uil uil-arrow-right button__icon"></i> */}
      </a>



    </SwiperSlide>
    <SwiperSlide>
      <ProjectsH2>Huffman Encoding</ProjectsH2>
      <ProjectsP>An application that Compressed and Decompressed Text Files using the Huffman Encoding algorithm for Proper Memory
Management. A custom-made priorityqueue was implemented that used Binary Search Trees and Linked Lists to handle
duplicate priorities.</ProjectsP>
<a href="mailto:sarahathar2001@yahoo.com" target = "_blank"   onMouseEnter ={onHover}  onMouseLeave ={onHover}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} class="button button--flex button--small button--link services__button">
      Email to see!
      {hover ? <ArrowForward/> : <ArrowRight/> }
  
          {/* <i class="uil uil-arrow-right button__icon"></i> */}
      </a>

    </SwiperSlide>
    <SwiperSlide>
    <ProjectsH2>Autocomplete</ProjectsH2>
      <ProjectsP>Implementation of an Abstract Class for AutocompleteList using vector and sorting algorithms, and then a program that uses
the custom-made class to suggest the most popular completions based off an incomplete input word.</ProjectsP>
  <a href="mailto:sarahathar2001@yahoo.com" target = "_blank" onMouseEnter ={onHover}  onMouseLeave ={onHover}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} class="button button--flex button--small button--link services__button">
      Email to see!
      {hover ? <ArrowForward/> : <ArrowRight/> }
  
          {/* <i class="uil uil-arrow-right button__icon"></i> */}
      </a>
      
      </SwiperSlide>

      <SwiperSlide>
      <ProjectsH2>Vigenere Cipher</ProjectsH2>
      <ProjectsP>Used Pair Programming to develop a Program that performs Word-Lookup, Encodes and Decodes Text using Vigenere Cipher
Algorithm, and Auto-Decodes provided text file using best-possible keyword for Decoding.</ProjectsP>

      <a  href="mailto:sarahathar2001@yahoo.com" target = "_blank" onMouseEnter ={onHover}  onMouseLeave ={onHover}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} class="button button--flex button--small button--link services__button">
      Email to see!
      {hover ? <ArrowForward/> : <ArrowRight/> }
  
          {/* <i class="uil uil-arrow-right button__icon"></i> */}
      </a>
       </SwiperSlide>

    </Swiper> 
            
        </ProjectsContainer>
    )
}

export default Projects
