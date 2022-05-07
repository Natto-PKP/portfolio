import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { ReactElement } from 'react';

import Header from '../Header/header.component';
import Nav from '../Nav/nav.component';
import Footer from '../Footer/footer.component';

import styles from './home.module.scss';

const competences = [
  { name: 'Node.js', points: 4 },
  { name: 'Javascript', points: 4 },
  { name: 'Typescript', points: 4 },
  { name: 'React', points: 3 },
  { name: 'Express', points: 4 },
  { name: 'Docker', points: 2 },
  { name: 'Jest', points: 3 },
  { name: 'Nginx', points: 2 },
  { name: 'SQL', points: 4 },
  { name: 'NoSQL', points: 3 },
  { name: 'HTML / CSS', points: 4 },
];

export default function Home(): ReactElement {
  return (
    <>
      <Header />

      <main className={styles.body}>
        <Nav />

        <section className={styles.about}>
          <h2 className={styles.title}>Wilfried Mainvielle</h2>

          <p className={styles.description}>
            Nouveau développeur web spécialisé dans les technologies Node.js,
            je porte un grand intérêt à la propreté, la clareté et l&apos;optimisation
            de mes projets. J&apos;aime apprendre de nouvelles technos et nouvelles
            façons de faire.
          </p>
        </section>

        <section className={styles.competences}>
          <h2 className={styles.title}>Compétences</h2>

          <div className={styles.table}>
            <ul className={styles.list}>
              {competences.map(({ name }) => <li className={styles.name}>{name}</li>)}
            </ul>

            <ul className={styles.list}>
              {competences.map(({ points }) => (
                <li className={styles.points}>
                  <span className={styles.full}>
                    {Array.from({ length: points }).map(() => <FontAwesomeIcon icon={faSquare} />)}
                  </span>

                  <span className={styles.empty}>
                    {5 - points > 0
                      && Array.from({ length: 5 - points }).map(() => (
                        <FontAwesomeIcon icon={faSquare} />
                      ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
