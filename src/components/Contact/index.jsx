import React from 'react'
import {motion} from 'framer-motion'
import {ContactContainer,
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

const Contact = () => {
  return (
     <motion.div
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opaticy:0}}
   >
    <ContactContainer>
        <Glass>
            <Text>
                <TextOne>Contact Me</TextOne>
                <TextTwo> Get in touch</TextTwo>
            </Text>
            <ContactContainer2>
                <ContactOptions>
                    <ContactOption>
                        <MdOutlineEmail size={30} />
                        <Title>Email</Title>
                        <Name>juliocesar_19@hotmail.com.br</Name>
                        <To href='mailto:juliocesar_19@hotmail.com.br' target='_blank'>Send a message</To>
                    </ContactOption>
                    <ContactOption>
                        <MdOutlineEmail/>
                        <Title>Email</Title>
                        <Name>juliocesar_19@hotmail.com.br</Name>
                        <To href='mailto:juliocesar_19@hotmail.com.br'>Send a message</To>
                    </ContactOption>
                    <ContactOption>
                        <BsWhatsapp/>
                        <Title>Whatsapp</Title>
                        <Name>+55 21 986739047</Name>
                        <To href='https://api.whatsapp.com/send?phone=5521986739047&text=Ol%C3%A1%2C%20me%20envie%20uma%20mensagem' target='_blank'>Send a message</To>
                    </ContactOption>
                </ContactOptions>
                <Form action="">
                    <Input type='text' name='name' placeholder='Your name' required/>
                    <Input type='email' name='email' placeholder='Your email' required/>
                    <Textarea name="message"  rows="7" placeholder="Your message here"></Textarea>
                    <Button type='submit'>Send</Button>
                </Form>
            </ContactContainer2>
        </Glass>

    </ContactContainer>
    </motion.div>
  )
}

export default Contact;