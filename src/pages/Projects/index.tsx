import React, {useEffect} from 'react'
import * as k from './styles'
import {motion} from 'framer-motion'
import { ProjectsArray } from '../../constants/Projects/projects'
import {FiGithub} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
//Aos
import useAOS from "../../effects/useAos.js";

const Projects = () => {

    useEffect(() => {
        useAOS({ duration: 2000 })
    }, [])

  return (
    <motion.div
    initial={{width:0}}
   animate={{width:'100%'}}
   exit={{x: window.innerWidth, transition: {duration:0.4}}}
    >
    <k.Container>
        <k.Title data-aos="fade-down">Projects</k.Title>

        <k.Glass data-aos="fade-up">
        <Swiper style={{width: '80%'}}
            spaceBetween={25}
            centeredSlides={true}
            slidesPerView={1}
            slidesPerGroup= {1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}

            modules={[Pagination,  Autoplay]}
            className="mySwiper"
            >
            {ProjectsArray.map((item)=>
            <SwiperSlide key={item.id}>
                <k.ProjectContainer>
                    <k.Image src={item.img}/>

                    <k.ProjectsContent>
                    <k.ProjectTitle>{item.title}</k.ProjectTitle>

                    <k.Links>
                        <a href={item.git}> <FiGithub
                        /></a>
                        <a  href={item.deploy}> <MdComputer/> </a>
                    </k.Links>

                    </k.ProjectsContent>
                </k.ProjectContainer>
            </SwiperSlide>)}
        </Swiper>
    </k.Glass>

    </k.Container>



   </motion.div>
   )
}

export default Projects;