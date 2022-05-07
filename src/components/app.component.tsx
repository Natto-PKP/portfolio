import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { ReactElement } from 'react';

import Home from './Home/home.component';
import Projects from './Projects/projects.component';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" />
      </Routes>
    </BrowserRouter>
  );
}
