import type { ReactElement } from 'react';

import Footer from '../Footer/footer.component';
import Header from '../Header/header.component';
import Nav from '../Nav/nav.component';

import styles from './projects.module.scss';

import TypescriptIcon from '../../images/icons/typescript.svg';
import JavascriptIcon from '../../images/icons/javascript.svg';
import DockerIcon from '../../images/icons/docker.svg';
import EslintIcon from '../../images/icons/eslint.svg';
import GitIcon from '../../images/icons/icon.svg';
import MongoDBIcon from '../../images/icons/mongo.svg';
import NginxIcon from '../../images/icons/nginx.svg';
import NodeIcon from '../../images/icons/nodejs.svg';
import PostgresIcon from '../../images/icons/postgresql.svg';
import ReactIcon from '../../images/icons/react.svg';
import SassIcon from '../../images/icons/sass.svg';

const tags = [
  { name: 'Typescript', icon: TypescriptIcon },
  { name: 'Javascript', icon: JavascriptIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Eslint', icon: EslintIcon },
  { name: 'GitIcon', icon: GitIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'Nginx', icon: NginxIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'Postgresql', icon: PostgresIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Scss / Sass', icon: SassIcon },
];

const projects = [
];

export default function Projects(): ReactElement {
  return (
    <>
      <Header />

      <main className={styles.body}>
        <Nav />

        <section className={styles.projects}>
          <ul className={styles.list}>
            <li />
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
