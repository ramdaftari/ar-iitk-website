'use client';

import React from 'react';
import FooterWithMap from 'components/footer';
import styles from './page.module.css';

// Example achievements data (replace or import as needed)
const achievements = [
  {
    id: 1,
    date: 'June',
    title: 'Some comp 1',
    description: 'We are the world we are the children, we are the ones who make a brighter day so let’s start giving.',
  },
  {
    id: 2,
    date: 'June',
    title: 'Some comp 2',
    description: 'One love, one heart, let’s get together and feel all right. As it was in the beginning (one love).',
  },
  {
    id: 3,
    date: 'June',
    title: 'Some comp 3',
    description: 'MAMA, I just killed a man, put a gun against his head, pulled my trigger, now he’s dead.',
  },
];

function AchievementCard({ achievement }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardDate}>{achievement.date}</div>
      <h3 className={styles.cardTitle}>{achievement.title}</h3>
      <p className={styles.cardDesc}>{achievement.description}</p>
    </div>
  );
}

export default function AchievementsPage() {
  return (
    <main>
      <section className={styles.heroSection}>
        <h1 className={styles.title}>Achievements</h1>
      </section>
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>
      <FooterWithMap />
    </main>
  );
}
