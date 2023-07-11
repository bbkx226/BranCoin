'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants'
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className='footer-gradient'/>

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[36px] text-[16px] text-white'>
          The future needs you.
        </h4>
        <a href='https://blockchainapp-4e293.web.app/' target='_blank'>
          <button type="button" className='flex items-center h-fit py-1 px-2 bg-[#2561ab] rounded-[32px]'>
            <img 
              src='/play.png'
              alt='play-button'
              className='w-[120px] h-[48px] object-contain'
            />
          </button>
        </a>
      </div>
      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <a href='https://brancoin-crypto.vercel.app'>
            <h4 className='font-extrabold text-[24px] text-white'>
              BranCoin
            </h4>
          </a>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © 2023 BranCoin. All rights reserved.
          </p>
          <div className='flex gap-4'>
            {socials.map((social, index) => (
              <a href={social.website} target='_blank'>
                <img 
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
