import { useState } from 'react';

interface LogoWrapperProps {
  stackInfo: {
    stack: string;
    stackImg: string;
    stackdesc: string[];
  };
  id: number;
}

const StackLogoWrapper = ({ stackInfo, id }: LogoWrapperProps) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <>
      <div
        className={`icon${id} flex flex-col items-center w-[10vmin] mx-3 mb-2  md:w-auto md:mx-5 `}
        onMouseOver={() => setHoverState(true)}
        onMouseOut={() => setHoverState(false)}
      >
        <img src={stackInfo.stackImg} />
        <div className="hidden mt-1 leading-normal md:text-center md:block">{stackInfo.stack}</div>
      </div>
      <ul
        className={`w-full text-extraDesc leading-snug absolute top-[-10rem] md:top-[-8rem]  ${
          hoverState ? 'visible animate-[fadein_0.8s_ease-in]' : 'invisible'
        } bg-sky-500/[.9] rounded-lg list-disc p-5 shadow-md`}
      >
        {stackInfo.stackdesc.map((descList, idx) => (
          <li key={idx} className="break-words	">
            {descList}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StackLogoWrapper;
