import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import {routes} from '@nx-multiple-apps/routes'
import NotFound from "apps/client/src/pages/NotFound";
const AuthenticatedApp: FC = () => {
  const currentRoutes = routes()
  return (
    <>
      <Routes>
        <Route path={ currentRoutes.client.onboarding } element={ <NotFound /> } />
        <Route path={ currentRoutes.client.tokenization } element={ <NotFound /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
