import { useState } from 'react';
import vite from '@/assets/vite.svg';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-full flex justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600">
        Install & Setup Vite + React + Typescript + Tailwind CSS 3
        <img src={vite} />
      </h1>
    </div>
  );
}

export default App;
