import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import type { ReactElement } from 'react';

import styles from './nav.module.scss';

export default function Nav(): ReactElement {
  const { pathname } = useLocation();

  return (
    <aside className={styles.aside}>
      <nav className={styles.navigator}>
        <Link className={pathname === '/projects' ? 'active' : undefined} to="/projects">
          <FontAwesomeIcon icon={faDiagramProject} />
          Projets
        </Link>
        <Link className={pathname === '/contact' ? 'active' : undefined} to="/contact">
          <FontAwesomeIcon icon={faAddressBook} />
          Contact
        </Link>
      </nav>
    </aside>
  );
}
