import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import type { ReactElement } from 'react';

import Avatar from '../../images/avatar.png';

import styles from './header.module.scss';

export default function Header(): ReactElement {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <NavLink to="/" className={styles.brand}>
          <img className={styles.avatar} src={Avatar} alt="Avatar de Natchy" />
          <h1 className={styles.title}>Portfolio</h1>
        </NavLink>

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
      </div>
    </header>
  );
}
