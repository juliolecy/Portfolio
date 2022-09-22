import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'
import Video from '../../assets/videos/video4.mp4'
import * as k from './ContactElements'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'

const Contact = () => {



  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_f3fprlr', 'template_0i20kvo',e.currentTarget, '7m_mqpOURjjtEgYDd')
    e.currentTarget.reset();
  }

  return (
     <motion.div
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opacity:0}}
   >
    <k.ContactContainer>

        <k.Glass>
            <k.Text>
                <k.TextOne>Contact Me</k.TextOne>
                <k.TextTwo> Get in touch</k.TextTwo>
            </k.Text>
            <k.ContactContainer2>
                <k.ContactOptions>
                    <k.ContactOption>
                        <k.To href='mailto:juliocesar_19@hotmail.com.br' target='_blank'><MdOutlineEmail size={30}/></k.To>
                    </k.ContactOption>

                    <k.ContactOption>
                        <k.To href='mailto:juliocesar_19@hotmail.com.br'>  <TbBrandTelegram size={30}/> </k.To>
                    </k.ContactOption>

                    <k.ContactOption>
                        <k.To href='https://api.whatsapp.com/send?phone=5521986739047&text=Ol%C3%A1%2C%20me%20envie%20uma%20mensagem' target='_blank'><BsWhatsapp size={30}/></k.To>
                    </k.ContactOption>

                </k.ContactOptions>
                <k.Form onSubmit={sendEmail}>
                    <k.Input type='text' name='name' placeholder='Your name' required/>
                    <k.Input type='email' name='email' placeholder='Your email' required/>
                    <k.Textarea name="message"  rows={5} placeholder="Your message here"></k.Textarea>
                    <k.Button type='submit'>Send</k.Button>
                </k.Form>
            </k.ContactContainer2>
        </k.Glass>

    </k.ContactContainer>
    </motion.div>
  )
}

export default Contact;