import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import type { ReactElement } from 'react';

import styles from './projects.module.scss';

import TypescriptIcon from '../../images/icons/typescript.svg';
import JavascriptIcon from '../../images/icons/javascript.svg';
import DockerIcon from '../../images/icons/docker.svg';
import EslintIcon from '../../images/icons/eslint.svg';
import GitIcon from '../../images/icons/git.svg';
import MongoDBIcon from '../../images/icons/mongodb.svg';
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
  { name: 'Git', icon: GitIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'Nginx', icon: NginxIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'Postgresql', icon: PostgresIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Scss / Sass', icon: SassIcon },
];

const projects = [
  {
    name: 'Nattux',
    description: "Interface graphique de système d'exploitation sur navigateur",
    tags: ['git', 'node.js', 'react', 'scss / sass', 'typescript', 'postgresql', 'eslint'],
    start: '25/04/2022',
    end: '???',
    git: 'https://github.com/Natto-PKP/nattux',
  },
  {
    name: 'tiny-seeder',
    description: 'Package node qui permet de remplir vos bases de données avec des fausses données',
    tags: ['git', 'node.js', 'typescript', 'eslint'],
    start: '',
    end: '',
    git: 'https://github.com/Natto-PKP/tiny-seeder',
    npm: 'https://www.npmjs.com/package/tiny-seeder',
  },
  {
    name: 'discord-sucrose',
    description: 'Structure et fonctions utile pour créer facilement un bot Discord',
    tags: ['git', 'node.js', 'typescript', 'eslint'],
    start: '',
    end: '',
    git: 'https://github.com/Natto-PKP/discord-sucrose',
    npm: 'https://www.npmjs.com/package/discord-sucrose',
  },
  {
    name: 'Sophie',
    description: 'Bot discord multi tâches',
    tags: ['git', 'node.js', 'typescript', 'postgresql', 'eslint'],
    start: '',
    end: '',
    git: 'https://github.com/Natto-PKP/Sophie',
  },
];

export default function Projects(): ReactElement {
  return (
    <section className={styles.projects}>
      <ul className={styles.list}>
        {projects.map((project) => {
          const currentTags = tags.filter((tag) => {
            const exist = project.tags.some((name) => tag.name.toLowerCase() === name);
            return exist;
          });

          return (
            <li className={styles.project}>
              <header className={styles.header}>
                <h2 className={styles.name}>{project.name}</h2>

                <div className={styles.buttons}>
                  {project.npm && (
                  <a className={styles.button} target="_blank" href={project.npm} rel="noreferrer">
                    <FontAwesomeIcon icon={faNpm} />
                  </a>
                  )}

                  {project.git && (
                  <a className={styles.button} target="_blank" href={project.git} rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  )}
                </div>

                <span className={styles.date}>{`${project.start} - ${project.end}`}</span>
              </header>

              <p className={styles.description}>{project.description}</p>

              <ul className={styles.tags}>
                {currentTags.map((tag) => (
                  <li className={styles.tag}>
                    <img className={styles.tag__icon} src={tag.icon} alt={tag.name} />
                    <span className={styles.tag__name}>{tag.name}</span>
                  </li>
                ))}
              </ul>

              <span className={styles.date}>{`${project.start} - ${project.end}`}</span>

              <div className={styles.buttons}>
                {project.npm && (
                  <a className={styles.button} target="_blank" href={project.npm} rel="noreferrer">
                    <FontAwesomeIcon icon={faNpm} />
                  </a>
                )}

                {project.git && (
                  <a className={styles.button} target="_blank" href={project.git} rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className={styles.name}>Github</span>
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
