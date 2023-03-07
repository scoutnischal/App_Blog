import './App.css';
import { Routes, Route } from 'react-router-dom';

//all the components are load in this file


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import PageNotFound from './pages/PageNotFound';
// import Register from './pages/Auth/RegisterPage';
import Accounts from './components/Accounts';
import UserDashBoard from './pages/User/UserDashBoard';
import PrivateRoute from './components/Routes/PrivateRoute';
import AdminProtectedRoute from './components/Routes/AdminProtectedRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AllProductsPage from './components/AllProductsPage';
// import{Toaster} from 'react-hot-toast';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<UserDashBoard />} />
        </Route>

        <Route path='/dashboard' element={<AdminProtectedRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
        </Route>


        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
