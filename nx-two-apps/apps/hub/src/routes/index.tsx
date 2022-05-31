import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';


const Routes = () => {
  const user = true // Here the logic to check if user is authenticated or not

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Routes;
