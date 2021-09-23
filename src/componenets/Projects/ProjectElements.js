import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const ProjectsContainer = styled.div`
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
    /* z-index: 1;  */
    @media only screen and (min-width: 480px) and (max-width: 760px) {
        padding-top: 15%;
        padding-left: 2%;
        padding-bottom: 0%;
        /* align-items: flex-start; */
        /* align-items: center; */

    /* align-items: center; */
    
    /* height: 865px; */
        /* position: relative; */
    }

    
    @media only screen and (min-width: 760px) and (max-width: 1000px) {
        padding-left: 2%;
        padding-bottom: 0%;
    }


    @media only screen and (min-width: 260px) and (max-width: 480px) {
        padding-top: 35%;
        height: 1100px;
        align-items: center;
        width: 560px;
        /* padding-right: 5%; */
    }

    @media only screen and (min-width: 760px) and (max-width: 1000px) {
        padding-top: 15%;
        height:900px;
    }
    

`

export const ProjectsWrapper = styled.div`
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

export const ProjectsCard = styled.div`
    background: #fff;
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


export const ProjectsIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 5px;
`


export const ProjectsH1 = styled.div`
    /* font-size: 2.5rem; */
    color: #000;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 3rem;

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 2rem;
        margin-bottom: 10px;

    }

    @media only screen and (min-width: 760px) and (max-width: 1000px) {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    

`

export const ProjectsH2 = styled.div`
    margin-bottom: 2rem;
    /* display: block; */
    text-align: center;
    font-size:  1.5rem;
    font-weight: 600;
    color: hsl(230,8%, 15%);

 
`

export const ProjectsP = styled.div`
    font-size: 1.2rem;
    display: block;
    /* text-align: center; */


    margin-bottom: 3rem;
`

export const ProjectsTitle = styled.p`
    font-weight: 600;
    font-size: 1.7rem;
    color: hsl(230 ,8%, 45%);
    margin-bottom: 5rem;

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 1.3rem;
        margin-bottom: 5rem;
    }

    
    @media only screen and (min-width: 760px) and (max-width: 1000px) {
        font-size: 1.3rem;
        margin-bottom: 5rem;
    }


`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 1rem;
    align-items: center;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 1rem;
    align-items: center;
`