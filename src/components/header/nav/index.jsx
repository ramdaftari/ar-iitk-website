'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

const links = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Projects",
    href: "/projects"
  },
  {
    title: "The Team",
    href: "/team"
  },
  {
    title: "Achievements",
    href: "/achievements"
  },
  {
    title: "Wiki",
    href: "https://wiki.ariitk.in/wiki"
  },
  {
    title: "Sponsors",
    href: "/sponsors"
  }
]

export default function Index({ setIsActive }) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={`${styles.nav} ${orbitron.className}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive} />
          <Footer />
        </div>
      </div>
    </motion.div>
  )
}