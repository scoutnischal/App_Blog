import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//all the components are load in this file

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactUsPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
