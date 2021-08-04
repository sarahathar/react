import React from 'react'

import {ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP, ProjectsTitle
    } from './ProjectElements';



    import { Swiper, SwiperSlide } from "swiper/react";


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
    return (
        <ProjectsContainer id ="projects">


<ProjectsH1>Projects</ProjectsH1>
             <ProjectsTitle>Passionate and Driven toward my career, I am always looking for chances to contribute and learn something new</ProjectsTitle>

    <Swiper slidesPerView={1} spaceBetween={30} keyboard={{  "enabled": true}} pagination={{  "clickable": true}} navigation={true} className="mySwiper">
    
    <SwiperSlide>
      <ProjectsH2>3+</ProjectsH2>
      <ProjectsP>Companies Worked</ProjectsP>
    </SwiperSlide>
    <SwiperSlide>
      <ProjectsH2>3+</ProjectsH2>
      <ProjectsP>Companies Worked</ProjectsP>

      <span class="button button--flex button--small button--link services__button">
              View More
  
          <i class="uil uil-arrow-right button__icon"></i>
      </span>

    </SwiperSlide>
    <SwiperSlide>
      <ProjectsH2>3+</ProjectsH2>
      <ProjectsP>Companies Worked</ProjectsP>
      
      </SwiperSlide>

      <SwiperSlide>
      <ProjectsH2>3+</ProjectsH2>
      <ProjectsP>Companies Worked</ProjectsP>
       </SwiperSlide>
     <SwiperSlide>
      <ProjectsH2>3+</ProjectsH2>
      <ProjectsP>Companies Worked</ProjectsP>
      </SwiperSlide>
       <SwiperSlide>
      <ProjectsH2>3+</ProjectsH2>
      <ProjectsP>Companies Worked</ProjectsP>
      
      </SwiperSlide>
    </Swiper> 
            
        </ProjectsContainer>
    )
}

export default Projects
