import {Route, Routes} from "react-router-dom";
import TokenizationList from "apps/client-tokenization/src/pages/TokenizationList";
import NotFound from "apps/client/src/pages/NotFound";
import {routes} from "@nx-multiple-apps/routes";


const SgRoutes = () => {
  const currentRoutes = routes()
  console.log("routes", currentRoutes);
  return (
    <Routes>
      <Route path={"/"} element={<NotFound/>}/>
      <Route path={currentRoutes.client.tokenization} element={ <TokenizationList/> } />
    </Routes>
  );
};

export default SgRoutes;
