import React, {useState} from 'react'
import './styles.css'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button} from 'semantic-ui-react';
import Swal from 'sweetalert2';
import {ContactContainer,
    ContactH1,
    ContactWrapper,
    ContactCard,
    ContactIcon,
    ContactH2,
    ContactP,
    ContactTitle, ContactRowContainer, ContactInfoWrapper, ContactFormWrapper, ContactBtnWrapper, ArrowForward, ArrowRight, ButtonSend
    } from './ContactElements';
    
    import myPDF from "../../pdf/resume.pdf";

const SERVICE_ID = "service_7r8r4p1"
const TEMPLATE_ID = "template_ann44nn"
const USER_ID = "user_kWt9D2gTHhQnl3zGxHgiu"



const Contact = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });

        e.target.reset()
      };
    return (

        <ContactContainer id="contact">
            <ContactH1>Contact</ContactH1>
            <ContactTitle>Connect with me</ContactTitle>

            <ContactRowContainer>
                <ContactInfoWrapper>
                    <div class="contact__container container grid">
                        <div class="contact__tab">
                            <div class="contact__information" >

                                    <i class="uil uil-file-download-alt contact__icon"></i>
                                
                                    <div>
                                        <h3 class="contact__title">Resume</h3>
                                        <a href={myPDF} download="Sarah Athar Resume.pdf" target="_blank" class="contact__sutitle">Download Here!</a>
                                    </div>
                                </div>

                     
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

                <Form class="contact__form grid contact__tab" onSubmit={handleOnSubmit}>
                    <div className='App' class="contact__inputs grid">



                        <div class="contact__inputs grid">
                            <div class="contact__content">
                                <label for="" class="contact__label">Name</label>
                                <input type="text" class="contact__input" name="name"></input>
                            </div>


                            <div class="contact__content">
                                <label for="" class="contact__label">Email</label>
                                <input type="email" class="contact__input" name="email"></input>
                            </div>

                            <div class="contact__content">
                                <label for="" class="contact__label">Subject</label>
                                <input type="text" class="contact__input" name="subject"></input>
                            </div>

                            <div class="contact__content">
                                <label for="" class="contact__label">Message</label>
                                <textarea id="" cols="0" rows="5" class="contact__input" name="message"></textarea>
                            </div>


                        </div>
                        <div>


                        <ContactBtnWrapper>
                            <ButtonSend type='submit' primary='true' dark='true'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter ={onHover}  onMouseLeave ={onHover}
                            >Interested, Email Me! {hover ? <ArrowForward/> : <ArrowRight/> }
                            </ButtonSend>
                        </ContactBtnWrapper>


                        </div>


                        </div>
                    </Form>

                </ContactFormWrapper>
            </ContactRowContainer>
            </ContactContainer>

    )
}

export default Contact;



