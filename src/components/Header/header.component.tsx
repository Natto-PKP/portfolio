import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

import Avatar from '../../images/avatar.png';

import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img className={styles.avatar} src={Avatar} alt="Avatar de Natchy" />
        <h1 className={styles.title}>Portfolio</h1>
      </Link>
    </header>
  );
}
