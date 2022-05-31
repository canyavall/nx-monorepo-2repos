import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../../pages/Login';

const UnauthenticatedApp = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="*" element={ <Navigate to="/login" state={ { from: location } } /> } />
    </Routes>
  );
};

export default UnauthenticatedApp;
