'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About BranCoin " textStyle="text-center"/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>BranCoin </span>
        is a new cryptocurrency created by 
        <span className='font-extrabold text-white'> Brandon Ban</span>, 
        a web3 enthusiast building his skills as a web developer.
        BranCoin aims to enable a 
        <span className='font-extrabold text-white'> fairer and more open</span> web3 economy, 
        empowering individuals with 
        <span className='font-extrabold text-white'> control </span> 
        over their digital assets and identities. 
        Brandon's journey from learner to creator symbolizes the spirit behind BranCoin.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
