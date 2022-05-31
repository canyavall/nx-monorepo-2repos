import { Routes, Route } from 'react-router-dom';
import TokenizationList from "apps/client-tokenization/src/pages/TokenizationList";

const TokenizationRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={ <TokenizationList/> } />
    </Routes>
  );
};

export default TokenizationRoutes;
