import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'
import Video from '../../assets/videos/video4.mp4'
import {ContactContainer,
VideoContainer,
VideoBg,
Text,
TextOne,
TextTwo,
ContactContainer2,
ContactOptions,
ContactOption,
Title,
Name,
To,
Form,
Textarea,
Input,
Button,
Glass
} from './ContactElements'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f3fprlr', 'template_0i20kvo', form.current, '7m_mqpOURjjtEgYDd')
            e.target.reset();
  }

  return (
     <motion.div
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opaticy:0}}
   >
    <ContactContainer>
         <VideoContainer>
            <VideoBg autoPlay={true} loop muted src={Video} type='video/mp4'/>
         </VideoContainer>
        <Glass>
            <Text>
                <TextOne>Contact Me</TextOne>
                <TextTwo> Get in touch</TextTwo>
            </Text>
            <ContactContainer2>
                <ContactOptions>
                    <ContactOption>
                        <To href='mailto:juliocesar_19@hotmail.com.br' target='_blank'><MdOutlineEmail size={30}/></To>
                    </ContactOption>

                    <ContactOption>
                        <To href='mailto:juliocesar_19@hotmail.com.br'>  <TbBrandTelegram size={30}/> </To>
                    </ContactOption>

                    <ContactOption>
                        <To href='https://api.whatsapp.com/send?phone=5521986739047&text=Ol%C3%A1%2C%20me%20envie%20uma%20mensagem' target='_blank'><BsWhatsapp size={30}/></To>
                    </ContactOption>

                </ContactOptions>
                <Form ref={form} onSubmit={sendEmail}>
                    <Input type='text' name='name' placeholder='Your name' required/>
                    <Input type='email' name='email' placeholder='Your email' required/>
                    <Textarea name="message"  rows="5" placeholder="Your message here"></Textarea>
                    <Button type='submit'>Send</Button>
                </Form>
            </ContactContainer2>
        </Glass>

    </ContactContainer>
    </motion.div>
  )
}

export default Contact;