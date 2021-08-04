import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    background: #fff;
    
    padding-top: 2%;
    align-items: center;
    
    /* height: 865px; */
    position: relative;
    z-index: 1; 

    /* @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    } */

`

export const ExperienceWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 35px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ExperienceCard = styled.div`
    background:rgb(192,192,192);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 0px 50px 30px 50px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

`


export const ExperienceIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 5px;
`


export const ExperienceH1 = styled.div`
    /* font-size: 2.5rem; */
    color: #000;
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 3rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const ExperienceH2 = styled.div`
    margin-bottom: 2px;
    display: block;
    text-align: center;
    font-size:  1.5rem;
    font-weight: 600;
    color: hsl(230,8%, 15%);

`

export const ExperienceP = styled.div`
    font-size: 1.2rem;
    display: block;
    text-align: center;
    color: #fff;
`

export const ExperienceTitle = styled.p`
    font-weight: 600;
    font-size: 1.7rem;
    color: hsl(230 ,8%, 45%);
    margin-bottom: 5rem;
`