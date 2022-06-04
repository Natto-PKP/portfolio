import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { ReactElement } from 'react';

import styles from './home.module.scss';

const competences = [
  { name: 'HTML', points: 4 },
  { name: 'CSS', points: 4 },
  { name: 'Node.js', points: 4 },
  { name: 'Javascript', points: 4 },
  { name: 'Typescript', points: 4 },
  { name: 'React', points: 3 },
  { name: 'Express', points: 4 },
  { name: 'Jest', points: 3 },
  { name: 'SQL', points: 4 },
  { name: 'MongoDB', points: 3 },
  { name: 'Docker', points: 3 },
  { name: 'Nginx', points: 2 },
];

export default function Home(): ReactElement {
  return (
    <section className={styles.board}>
      <section className={styles.about}>
        <h2 className={styles.title}>Wilfried Mainvielle</h2>

        <p className={styles.description}>
          Jeune développeur web spécialisé dans les technologies Node.js,
          je porte un grand intérêt à la propreté, la clareté et l&apos;optimisation
          de mes projets. J&apos;aime apprendre de nouvelles technos et nouvelles
          façons de faire.
        </p>
      </section>

      <section className={styles.competences}>
        <h2 className={styles.title}>Compétences</h2>

        <div className={styles.table}>
          <ul className={styles.list}>
            {competences.map(({ name }) => <li key={name} className={styles.name}>{name}</li>)}
          </ul>

          <ul className={styles.list}>
            {competences.map(({ name, points }) => (
              <li key={name} className={styles.points}>
                <span className={styles.full}>
                  {Array.from({ length: points }).map((_, i) => <FontAwesomeIcon key={`square_${i + 1}`} icon={faSquare} />)}
                </span>

                <span className={styles.empty}>
                  {5 - points > 0
                      && Array.from({ length: 5 - points }).map((_, i) => (
                        <FontAwesomeIcon key={`square_${i + 1}`} icon={faSquare} />
                      ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
