import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { ReactElement } from 'react';

import styles from './contact.module.scss';

export default function Contact(): ReactElement {
  return (
    <section className={styles.contact}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="http://github.com/Natto-PKP">
            <FontAwesomeIcon icon={faGithub} />
            <span className={styles.content}>Github</span>
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="http://fr.linkedin.com/in/wilfried-mainvielle-56b08022a">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className={styles.content}>Linkedin</span>
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="mailto:wmainvielle@gmail.com">
            <FontAwesomeIcon icon={faAt} />
            <span className={styles.content}>wmainvielle@gmail.com</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
