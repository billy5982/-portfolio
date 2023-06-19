import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
function App() {
  return (
    <div className="min-h-screen bg-fixed bg-gradient-to-t from-[#1C2837] to-[#050608] text-primary">
      <BrowserRouter>
        <Layout>
          <div>hi</div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
