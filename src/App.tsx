import { useState } from 'react';
import Banggyul from '@/assets/projectSpriteImg/Banggyul.png';
import BMTI from '@/assets/projectSpriteImg/BMTI.png';
import react from '@/assets/stackIcon/React.svg';
import banggyulLogo from '@/assets/captionLogo/banggyul-logo.svg';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center bg-black">
      <h1 className="text-3xl font-bold text-blue-600">
        Install & Setup Vite + React + Typescript + Tailwind CSS 3
        <img src={Banggyul} />
        <img src={react} />
        <img src={banggyulLogo} />
        <img src={BMTI} />
      </h1>
    </div>
  );
}

export default App;
