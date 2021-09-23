import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HomeContainer = styled.div`
    background: #FFF;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    align-items: flex-start;
    /* padding: 5% 0% 15% 12%; */
/*     
    height: 800px; */
    padding: 0 100px;
    padding-top: 10%;
    padding-right: 10%;
    height: 865px;
    position: relative;
    z-index: 1;

    /* @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 1.7rem;
    } */

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        padding: 0 100px;
        padding-top: 25%;
        padding-left: 0%;
        height: 865px;
    }

    @media only screen and (min-width: 760px) and (max-width: 1000px) {
        padding: 0 20px;
        padding-top: 25%;
        padding-left: 0%;
        height: 800px;
    }


    @media only screen and (min-width: 260px) and (max-width: 480px) {
        display: block ;
    /* justify-content: center; */
        align-items: center;
        /* align-items: flex-start; */
       
        padding-top: 50%;
        padding-right: 0%;
        height: 1000px;
        padding-left: 5%;
        width: 560px;
        /* padding-right: 0%; */
    }

    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
        background: #FFF;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    align-items: flex-start;
    /* padding: 5% 0% 15% 12%; */
/*     
    height: 800px; */
    padding: 0 100px;
    padding-left: 0%;
    padding-top: 10%;
    padding-right: 0%;
    height: 865px;
    position: relative;
    z-index: 1;
        /* padding-right: 0%; */
    }


    /* position: relative; */
   

    
   
`
export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    /* display: ; */
    flex-direction: column;
    align-items: left;

`

export const HomeRowContainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: inherit;
    justify-content: space-between;
    width: 95%;
    padding: 8px 24px;

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        /* width: 115%; */
        /* justify-content: space-right; */
        width: 100%;
        padding: 8px 24px;

    }

    @media only screen and (min-width: 260px) and (max-width: 480px) {
        display: flex;
        /* flex-direction: row; */
        align-items: flex-start;
        justify-content: space-between;
        width: 90%;
        /* padding-left: 0%; */
        padding: 0px 0px;
    }


    /* align-items: flex-end; */
`

export const HomeSocialContainer= styled.div`
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
`

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomeH1 = styled.div`
    font-weight: 600;
    font-size: 3rem;

    @media only screen and (min-width: 260px) and (max-width: 480px) {
        font-size: 35px;
        margin-bottom: 1.5rem;

    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 3rem;
    }

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 1.5rem;
    }

`
export const HomeH3 = styled.div`
    font-weight: 600;
    font-size: 1.7rem;
    color: hsl(230 ,8%, 45%);
    margin-bottom: 0.75rem;


    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 1.7rem;
        
    }

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 260px) and (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;

    }


`
export const HomeP = styled.div`
    margin-bottom: 2rem;
    font-size: 1.5rem;
    /* max-width: 600px; */



    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 260px) and (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 5rem;
    }

`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const HomeBlob = styled.svg`
    width: 250px;
    fill:hsl(230,69%, 61%);

    @media only screen and (min-width: 260px) and (max-width: 480px) {
        margin-bottom: 3rem;
    }


`
export const HomeSocialIcon = styled.a`
    font-size: 2.2rem;
    color: hsl(230,69%, 61%);

    &:hover {
        color: hsl(230,57%, 53%);
    }
`


export const HomeBlobImage = styled.img`
    height: 300px;
    width: 300px;


`