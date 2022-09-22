import React from 'react'
import * as k from './styles'
import {motion} from 'framer-motion'
import { ProjectsArray } from '../../constants/Projects/projects'
import { Swiper, SwiperSlide } from "swiper/react";
import {FiGithub} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

const Projects = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <k.Container>
        <k.Title data-aos="fade-up">Projects</k.Title>

        <k.Glass>
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