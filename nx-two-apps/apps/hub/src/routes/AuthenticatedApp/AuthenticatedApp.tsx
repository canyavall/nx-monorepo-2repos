import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from "../../pages/NotFound";
import {sgRoutes} from "apps/hub/src/routes/routes";

const AuthenticatedApp: FC = () => {
  return (
    <>
      <Routes>
        <Route path={ sgRoutes.myProfile } element={ <NotFound /> } />
        <Route path={ sgRoutes.tokenization } element={ <NotFound /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
