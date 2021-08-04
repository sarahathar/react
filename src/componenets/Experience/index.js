import React from 'react'

import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'


import {ExperienceContainer,
    ExperienceH1,
    ExperienceWrapper,
    ExperienceCard,
    ExperienceIcon,
    ExperienceH2,
    ExperienceP,
    ExperienceTitle
    } from './ExperienceElements';


const Experience = () => {
    return (
        <ExperienceContainer id ="experience">
            <ExperienceH1>Experience Me</ExperienceH1>
            <ExperienceTitle>Passionate and Driven toward my career, I am always looking for chances to contribute and learn something new</ExperienceTitle>
            <ExperienceWrapper>

                <ExperienceCard>
                    <ExperienceIcon src={Icon1}/>
                    <ExperienceH2>3+</ExperienceH2>
                    <ExperienceP>Companies Worked</ExperienceP>
                </ExperienceCard>

                <ExperienceCard>
                    <ExperienceIcon src={Icon2}/>
                    <ExperienceH2>3+</ExperienceH2>
                    <ExperienceP>Years Experience</ExperienceP>
                </ExperienceCard>

                <ExperienceCard>
                    <ExperienceIcon src={Icon3}/>
                    <ExperienceH2>20+</ExperienceH2>
                    <ExperienceP>Complete Experience</ExperienceP>
                </ExperienceCard>

            </ExperienceWrapper>
           
            
        </ExperienceContainer>
    )
}

export default Experience
