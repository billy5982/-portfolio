import MainPage from '@/pages/MainPage';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />} />
    </ReactRoutes>
  );
};

export default Routes;
