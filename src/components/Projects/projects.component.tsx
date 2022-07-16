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
import RedisIcon from '../../images/icons/redis.svg';
import DiscordJSIcon from '../../images/icons/discord-js.svg';

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
  { name: 'Redis', icon: RedisIcon },
  { name: 'Discord.js', icon: DiscordJSIcon },
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
    description: 'Package node qui permet de remplir vos bases de données avec de fausses données',
    tags: ['git', 'node.js', 'typescript', 'eslint'],
    start: '29/01/2022',
    end: '01/03/2022',
    git: 'https://github.com/Natto-PKP/tiny-seeder',
    npm: 'https://www.npmjs.com/package/tiny-seeder',
  },
  {
    name: 'discord-sucrose',
    description: 'Structure et fonctions utiles pour créer facilement un bot Discord',
    tags: ['git', 'node.js', 'typescript', 'discord.js', 'eslint'],
    start: '22/11/2021',
    end: '02/03/2022',
    git: 'https://github.com/Natto-PKP/discord-sucrose',
    npm: 'https://www.npmjs.com/package/discord-sucrose',
  },
  {
    name: 'Sophie',
    description: 'Bot discord multi-tâches',
    tags: ['git', 'node.js', 'typescript', 'discord.js', 'postgresql', 'eslint'],
    start: '13/10/2021',
    end: '???',
    git: 'https://github.com/Natto-PKP/Sophie',
  },
  {
    name: 'Shequ',
    description: "Bot discord d'exemple pour la communauté",
    tags: ['git', 'node.js', 'typescript', 'discord.js', 'postgresql', 'redis', 'eslint'],
    start: '06/06/2022',
    end: '???',
    git: 'https://github.com/Natto-PKP/Shequ',
  },
  {
    name: 'animes.api.natchy.xyz',
    description: 'Api du projet de liste d\'animés',
    tags: ['git', 'node.js', 'typescript', 'postgresql', 'eslint'],
    start: '18/06/2022',
    end: '???',
    git: 'https://github.com/Natto-PKP/animes.api.natchy.xyz',
  },
  {
    name: 'animes.natchy.xyz',
    description: 'Web front du projet de la liste d\'animés',
    tags: ['git', 'react', 'scss / sass', 'typescript', 'eslint'],
    start: '15/07/2022',
    end: '???',
    git: 'https://github.com/Natto-PKP/animes.natchy.xyz',
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
            <li key={project.name} className={styles.project}>
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
