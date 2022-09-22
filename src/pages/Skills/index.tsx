import React, { useEffect } from 'react'
import * as k from './styles'
import { SkillsArray } from '../../constants/Skills/skills'
//FramerMotion
import { motion } from 'framer-motion'
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//Aos
import useAOS from "../../effects/useAos.js";

const Skills = () => {

    useEffect(() => {
        useAOS({ duration: 2000 })
    }, [])

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
            className='allpage' >

            <k.Container>

                <k.Title data-aos="fade-down">My Skills</k.Title>

                <k.Glass>

                    <Swiper style={{ width: '80%' }}
                        breakpoints={{
                            789: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                                centeredSlides: false
                            },
                            385: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            }

                        }}
                        spaceBetween={25}
                        centeredSlides={true}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {SkillsArray.map((skill) =>
                            <SwiperSlide key={skill.id}>
                                <k.SkillContainer>
                                    <k.SkillTitle>{skill.title}</k.SkillTitle>
                                    <k.Image src={skill.img} />
                                </k.SkillContainer>
                            </SwiperSlide>)}
                    </Swiper>

                </k.Glass>
            </k.Container>
        </motion.div>
    )
}

export default Skills;