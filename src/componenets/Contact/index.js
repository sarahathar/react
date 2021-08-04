import React, {useState} from 'react'
import './styles.css'
import {Button} from '../ButtonElements';

import {ContactContainer,
    ContactH1,
    ContactWrapper,
    ContactCard,
    ContactIcon,
    ContactH2,
    ContactP,
    ContactTitle, ContactRowContainer, ContactInfoWrapper, ContactFormWrapper, ContactBtnWrapper, ArrowForward, ArrowRight
    } from './ContactElements';



const Contact = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (

        <ContactContainer id="contact">
            <ContactH1>Contact</ContactH1>
            <ContactTitle>Connect with me</ContactTitle>

            <ContactRowContainer>
                <ContactInfoWrapper>
                    <div class="contact__container container grid">
                        <div class="contact__tab">
                            <div class="contact__information" >
                                <i class="uil uil-phone contact__icon"></i>
                        
                            <div>
                                <h3 class="contact__title">Call Me</h3>
                                <span class="contact__sutitle">(312) 731-1670</span>
                            </div>
                        </div>


            


                        <div class="contact__information" >
                                <i class="uil uil-envelope contact__icon"></i>
                        
                            <div>
                                <h3 class="contact__title">Email</h3>
                                <span class="contact__sutitle">sarahathar2001@yahoo.com</span>
                            </div>
                        </div>


                

                        <div class="contact__information" >
                                <i class="uil uil-map-marker contact__icon"></i>
                        
                            <div>
                                <h3 class="contact__title">Location</h3>
                                <span class="contact__sutitle">Chicago, IL</span>
                            </div>
                        </div>  
                    </div>
                    </div>

                </ContactInfoWrapper>

                <ContactFormWrapper>
                    <form action="" class="contact__form grid contact__tab">
                        <div class="contact__inputs grid">
                            <div class="contact__content">
                                <label for="" class="contact__label">Name</label>
                                <input type="text" class="contact__input"></input>
                            </div>


                            <div class="contact__content">
                                <label for="" class="contact__label">Email</label>
                                <input type="email" class="contact__input"></input>
                            </div>

                            <div class="contact__content">
                                <label for="" class="contact__label">Project</label>
                                <input type="text" class="contact__input"></input>
                            </div>

                            <div class="contact__content">
                                <label for="" class="contact__label">Message</label>
                                <textarea name="" id="" cols="0" rows="5" class="contact__input"></textarea>
                            </div>

                            <div>
                            <ContactBtnWrapper>
                                <Button to="email" onMouseEnter ={onHover}  onMouseLeave ={onHover} primary='true' dark='true'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Interested, Email Me! {hover ? <ArrowForward/> : <ArrowRight/> }
                                </Button>

                            </ContactBtnWrapper>
                            </div>

                        </div>
                    </form>


              
                </ContactFormWrapper>
            </ContactRowContainer>

            </ContactContainer>


    )
}

export default Contact;
