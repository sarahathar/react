import React, {useState,  Component } from 'react'
import './styles.css'
import {Button} from '../ButtonElements';
import emailjs from "emailjs-com"

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




    class ContactForm extends Component {
        state = {
          name: '',
          email: '',
          subject: '',
          message: '',
        }
        handleSubmit(e) {
            e.preventDefault()
            const { name, email, subject, message } = this.state
            let templateParams = {
              from_name: email,
              to_name: 'sarahathar2001@yahoo.com',
              subject: subject,
              message_html: message,
             }
             emailjs.send(
              'yahoo',
              'template_ann44nn',
               templateParams,
              'user_kWt9D2gTHhQnl3zGxHgiu'
             )
             this.resetForm()
         }

         resetForm() {
            this.setState({
              name: '',
              email: '',
              subject: '',
              message: '',
            })
          }
        handleChange = (param, e) => {
            this.setState({ [param]: e.target.value })
          }


          render() {
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
                    <form action="" class="contact__form grid contact__tab" onSubmit={this.handleSubmit.bind(this)} >
                        <div class="contact__inputs grid">
                            <div class="contact__content">
                                <label for="" class="contact__label">Name</label>
                                <input type="text" class="contact__input" name="name" value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}></input>
                            </div>


                            <div class="contact__content">
                                <label for="" class="contact__label">Email</label>
                                <input type="email" class="contact__input" name="email" value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}></input>
                            </div>

                            <div class="contact__content">
                                <label for="" class="contact__label">Project</label>
                                <input type="text" class="contact__input" name="subject" className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}></input>
                            </div>

                            <div class="contact__content">
                                <label for="" class="contact__label">Message</label>
                                <textarea id="" cols="0" rows="5" class="contact__input" name="message" className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}></textarea>
                            </div>

                            <div>

                             {/* <ContactBtnWrapper> */}
                                <ButtonSend type="submit" value="Send" to="email"   variant="primary"/>
                                
                                {/* Interested, Email Me! {hover ? <ArrowForward/> : <ArrowRight/> } */}
            

                            {/* </ContactBtnWrapper>  */}
                            </div>

                        </div>
                    </form>


              
                </ContactFormWrapper>
            </ContactRowContainer>

            </ContactContainer>


    )
    
  }
}
export default ContactForm