
import React from 'react'
import './styles.css'

import {AboutContainer, AboutH1, AboutTitle, AboutRowContainer, AboutEducation, AboutWork
    
    } from './AboutElements';

const About = () => {
    return (

        <AboutContainer id="about">

            <AboutH1>About</AboutH1>
            <AboutTitle>My Personal Journey</AboutTitle>
            <div class="about__tabs">
           
            <div class="about__button button--flex" >
                        <i class="uil uil-graduation-cap" about__icon></i>Education
            </div>
            <div class="about__button button--flex">
                        <i class="uil uil-briefcase-alt" about__icon></i>Work
                    </div>

            </div>
            <AboutRowContainer>


                <AboutEducation>
                <div class="about__data">
        
        <div></div>
    <div>
    </div>

        <div>
        <h3 class="about__title">Bachelors in Computer Science, Software Engineering</h3>
                                <span class="about__subtitle">University of Illinois at Chicago</span>
                                <div class="about__calendar">
                                    <i class="uil uil-calendar-alt"></i> August 2019 - May 2023
                                </div>
        </div>
    </div>



                </AboutEducation>



                <AboutWork>
                   

                    {/* <div class="about__content"> */}
                                               
                
                        {/* <!-- <div></div> --> */}
        


                        <div class="about__data">
                            <div></div>
                        <div>
                            {/* <span class="about__rounder"></span> */}
                            {/* <span class="about__line"></span> */}
                        </div>
            
          
                                
                                 <div>
                                    <h3 class="about__title">Teaching Assistant for Data Structures</h3>
                                    <span class="about__subtitle">University of Illinois at Chicago</span>
                                    <div class="about__calendar">
                                        <i class="uil uil-calendar-alt"></i> January 2021 - Present
                                    </div>
                                 </div>

                        </div> 







                        <div class="about__data">
                            <div></div>
                        <div>
                            {/* <span class="about__rounder"></span> */}
                            {/* <span class="about__line"></span> */}
                        </div>
            
          
                                <div>
                                    <h3 class="about__title">Tech Fellow for Android Mobile Development Course</h3>
                                    <span class="about__subtitle">Codepath.org</span>
                                    <div class="about__calendar">
                                        <i class="uil uil-calendar-alt"></i> July 2021 - Present
                                    </div>
                                </div>
            
                            </div> 

                        <div class="about__data">
        
                            <div></div>
                        <div>
                            {/* <span class="about__rounder"></span> */}
                            {/* <span class="about__line"></span> */}
                        </div>
        
                            <div>
                                <h3 class="about__title">Research Assistant</h3>
                                <span class="about__subtitle">University of Illinois at Chicago</span>
                                <div class="about__calendar">
                                    <i class="uil uil-calendar-alt"></i> June 2021 - July 2021
                                </div>
                            </div>

                        </div>
                               
                               
                        <div class="about__data">
        
                        <div></div>
                        <div>
                            {/* <span class="about__rounder"></span> */}
                            {/* <span class="about__line"></span> */}
                        </div>
        
                            <div>
                                <h3 class="about__title">Advisory Sprintern in AI & Data Analytics Assistant</h3>
                                <span class="about__subtitle">KPMG, Chicago</span>
                                <div class="about__calendar">
                                    <i class="uil uil-calendar-alt"></i> May 2021 - June 2021
                                </div>
                            </div>
                               
                                                   
                            </div>
                            <div class="about__data">
                            <div></div>
                        <div>
                            {/* <span class="about__rounder"></span> */}
                            {/* <span class="about__line"></span> */}
                        </div>
            
          
                               
            
                            </div> 
                               
                               
                            <div class="about__data">
                            <div></div>
                        <div>
                            {/* <span class="about__rounder"></span> */}
                            {/* <span class="about__line"></span> */}
                        </div>
            
                                <div>
                                    <h3 class="about__title">Teaching Assistant for Breakthrough Tech Chicago</h3>
                                    <span class="about__subtitle">University of Illinois at Chicago</span>
                                    <div class="about__calendar">
                                        <i class="uil uil-calendar-alt"></i> January 2021
                                    </div>
                                </div>
            
            
                            </div>
                        {/* </div> */}

                </AboutWork>



            </AboutRowContainer>
            

{/* 
    {/* <div class="about__container container"></div> */}
        
        {/* <div class="about__sections"> */}
            

           
        {/* </div> */} 

        </AboutContainer>
   
    )}

export default About


