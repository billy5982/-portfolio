import { BrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Routes from '@/routes';
function App() {
  return (
    <BrowserRouter>
      <Layout routes={<Routes />} />
    </BrowserRouter>
  );
}

export default App;
