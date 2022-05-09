import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import type { ReactElement } from 'react';

import styles from './nav.module.scss';

export default function Nav(): ReactElement {
  const { pathname } = useLocation();

  return (
    <aside className={styles.aside}>
      <nav className={styles.navigator}>
        <NavLink className={pathname === '/projects' ? 'active' : undefined} to="/projects">
          <FontAwesomeIcon icon={faDiagramProject} />
          Projets
        </NavLink>
        <NavLink className={pathname === '/contact' ? 'active' : undefined} to="/contact">
          <FontAwesomeIcon icon={faAddressBook} />
          Contact
        </NavLink>
      </nav>
    </aside>
  );
}
