// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter } from 'react-router-dom';
import SgRoutes from "apps/client/src/routes";

export function App() {
  return (
      <BrowserRouter>
        <SgRoutes/>
      </BrowserRouter>
  );
}

export default App;
