import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation.tsx';
import HomePage from './pages/home-page.tsx';
import ProjectsPage from './pages/projects-page.tsx';
import ProjectDetailPage from './pages/project-detail.tsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;