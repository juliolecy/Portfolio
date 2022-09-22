import React, {useEffect} from 'react'
import * as k from './styles'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'
//Aos
import useAOS from "../../effects/useAos.js";

const Contact = () => {

    useEffect(() => {
        useAOS({ duration: 2000 })
    }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_f3fprlr', 'template_0i20kvo',e.currentTarget, '7m_mqpOURjjtEgYDd')
    e.currentTarget.reset();
  }

  return (
     <motion.div
    initial={{width:0}}
   animate={{width:'100%'}}
   exit={{x: window.innerWidth, transition: {duration:0.4}}}
   >
    <k.Container>
            <k.Title data-aos="fade-down">Contact me</k.Title>

        <k.Glass data-aos="fade-up">
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
        </k.Glass>

    </k.Container>
    </motion.div>
  )
}

export default Contact;