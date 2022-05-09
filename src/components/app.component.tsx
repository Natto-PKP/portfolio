import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { ReactElement } from 'react';

import Home from './Home/home.component';
import Projects from './Projects/projects.component';
import Contact from './Contact/contact.component';

import styles from './app.module.scss';
import Header from './Header/header.component';
import Nav from './Nav/nav.component';
import Footer from './Footer/footer.component';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <div id={styles.body}>
        <Header />

        <main>
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
