import MainPage from '@/pages/MainPage';
import NotFound from '@/pages/NotFound';
import Test from '@/pages/Test';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
