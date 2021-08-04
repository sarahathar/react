import styled from 'styled-components'

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
export const ContactContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    background: #fff;
    padding-top: 1%;
    align-items: center;
    
        
    @media only screen and (min-width: 480px) and (max-width: 760px) {
        padding-top: 0%;
    }

`

export const ContactWrapper = styled.div`
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

export const ContactCard = styled.div`
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


export const ContactIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 5px;
`


export const ContactH1 = styled.div`
    /* font-size: 2.5rem; */
    color: #000;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 3rem;

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 2rem;
        margin-bottom: 10px;
    }

`

export const ContactH2 = styled.div`
    margin-bottom: 2px;
    display: block;
    text-align: center;
    font-size:  1.5rem;
    font-weight: 600;
    color: hsl(230,8%, 15%);

`

export const ContactP = styled.div`
    font-size: 1.2rem;
    display: block;
    text-align: center;
    color: #fff;
`

export const ContactTitle = styled.p`
    font-weight: 600;
    font-size: 1.7rem;
    color: hsl(230 ,8%, 45%);
    margin-bottom: 3rem;

    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
    }
`


export const ContactInfoWrapper = styled.div`
    width: 250px;
    @media only screen and (min-width: 480px) and (max-width: 760px) {
        width: 273px;
    }

`


export const ContactRowContainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: flex-start;
    justify-content: space-around;

    width: 50%;
    padding: 8px 24px;


    @media only screen and (min-width: 480px) and (max-width: 760px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-around;

        width: 20%;
        padding: 0px 0px;
    }
`


export const ContactFormWrapper = styled.div`
        @media only screen and (min-width: 480px) and (max-width: 760px) {
        padding-left: 25% ;
    }
`


export const ContactBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`