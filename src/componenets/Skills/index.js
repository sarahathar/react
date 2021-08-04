import React from 'react'
import { Button } from '../ButtonElements';
import {SkillsContainer, SkillsWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrp, ImgWrp, Img,

     SkillsSubtitle, SkillsName, SkillsHeader, SkillsArrow, SkillsTitles, SkillsH1, SkillsTitle
, SkillsList

} from './SkillElements';

import './styles.css';
import './main.js';


const Skills = () => {
    return (
        
        <SkillsContainer id="skills">
            <SkillsH1>Skills</SkillsH1>
            <SkillsTitle>My Technical Level</SkillsTitle>

                <SkillsWrapper>



                <div class="skills__container container grid">
                    <div>


                        <div class="skills__content skills__open">
                            <div class="skills__header">
                                <i class="uil uil-brackets-curly skills__icon"></i>

                                <div>
                                    <h1 class="skills__title">Frontend Development</h1>
                                    <span class="skills__subtitle">More than 3 years</span>                                    
                                </div>
                                <i class="uil uil-angle-down skills__arrow "></i>
                            </div>

                            <div class="skills__list grid">
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">HTML</h3>
                                        <span class="skills__number">90%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage skills__html"></span>
                                    </div>

                                </div>

                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">CSS</h3>
                                        <span class="skills__number">80%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage skills__css"></span>
                                    </div>

                                </div>

                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">React</h3>
                                        <span class="skills__number">80%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage skills__react"></span>
                                    </div>

                                </div>

                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">Reactnative</h3>
                                        <span class="skills__number">80%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage skills__reactnative"></span>
                                    </div>

                                </div>

                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">JavaScript</h3>
                                        <span class="skills__number">50%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage skills__javascript"></span>
                                    </div>

                                </div>


                            </div>

                        
                        </div>


                    </div>

                    <div>
                        <div class="skills__content skills__open">
                        <div class="skills__header">
                            <i class="uil uil-server-network skills__icon"></i>

                            <div>
                                <h1 class="skills__title">Backend Development</h1>
                                <span class="skills__subtitle">More than 3 years</span>                                    
                            </div>
                            <i class="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">C++</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__cpp"></span>
                                </div>

                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Java</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__java"></span>
                                </div>

                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Python</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__python"></span>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    </div>


                    
                        
                </div>





                </SkillsWrapper>
               
            </SkillsContainer>
        
    )
}

export default Skills;
