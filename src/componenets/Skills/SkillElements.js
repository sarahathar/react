import styled from 'styled-components'

export const SkillsContainer = styled.div`
    color: #000; 
    background: #fff;

    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    padding-top: 2%;
    align-items: center;
    
    height: 800px;

    
    @media only screen and (min-width: 480px) and (max-width: 760px) {
        padding-top: 15%;
    }

    @media only screen and (min-width: 260px) and (max-width: 480px) {
        padding-top: 35%;
        height: 1000px;

        /* display: block ; */
    /* justify-content: center; */
        align-items: center;
        width: 560px;
        /* padding-right: 0%; */
    }

    
    @media only screen and (min-width: 760px) and (max-width: 1000px) {
        padding-top: 15%;
        height:900px;
    }
    /* z-index: 1;  */


    
`
export const SkillsWrapper = styled.div`
    display: grid;
    /* flex-direction: row; */
    z-index: 1;
    /* height: 860px; */
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    
    padding: 0 24px;
    /* justify-content: center; */




    
`


export const SkillsH1 = styled.div`
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



export const SkillsTitle = styled.p`
    font-weight: 600;
    font-size: 1.7rem;
    color: hsl(230 ,8%, 45%);
    
    margin-bottom: 5rem;


    @media only screen and (min-width: 480px) and (max-width: 760px) {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    @media only screen and (min-width: 760px) and (max-width: 1000px) {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
`





export const InfoRow = styled.div`
    /* display: grid; */
    /* grid-auto-columns: minmax(auto, 1fr);  */
    
    /* align-items: center; */
    /* grid-template-areas: ${({imgStart}) => (imgStart ?`'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ?`'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }  */



    display: flex;
    /* flex-direction: row; */
    align-items: flex-start;
    /* max-width: 100%; */

    /* justify-content: space-between; */
    justify-content: space-between;
    width: 60%;
    padding: 8px 24px;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`


export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0px;
    padding-bottom: 60px;
`


export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ?'#f7f8fa' : '#010606')};

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 16px;
    color: ${({darkText}) => (darkText ?'#010606' : '#fff')};
`

export const BtnWrp = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrp = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img `
    margin: 0 0 10px 0;
    padding-right: 0;
    width: 100%;
`



// export const SkillsTitle = styled.h1`
//     font-size: 1.25rem;
// `

export const SkillsTitles = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`


export const SkillsSubtitle = styled.span`
    font-size: 0.875rem;
    color:hsl(230,8%, 65%);
`

export const SkillsName = styled.h3`
    font-size: 1rem;
    font-weight:  500;
`


export const SkillsHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;
    cursor: pointer;

`

// export const SkillsIcon = styled.i`
//     margin-right: 0.75rem;
//     font-size: 2rem;
//     color: hsl(230,69%, 61%);

// `

export const SkillsArrow = styled.i`
    margin-left: auto;
    transition: 0.4s;
    font-size: 2rem;
    color: hsl(230,69%, 61%);
`
export const SkillsList = styled.div`
    row-gap: 1.5rem;
    padding-left: 2.7rem;
`




export const SkillsCard = styled.div`
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


export const SkillsIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 5px;
`

