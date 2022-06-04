import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { ReactElement } from 'react';

import Home from './Home/home.component';
import Projects from './Projects/projects.component';
import Contact from './Contact/contact.component';
import Header from './Header/header.component';
import Nav from './Nav/nav.component';
import Footer from './Footer/footer.component';

import styles from './app.module.scss';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <div id={styles.body}>
        <div id={styles.background} />

        <Header />

        <main id={styles.main}>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
