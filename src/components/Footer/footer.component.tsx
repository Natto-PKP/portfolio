import type { ReactElement } from 'react';

import styles from './footer.module.scss';

export default function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <p>Copyrights natchy.xyz 2022 - Tous droits réservés</p>
    </footer>
  );
}
