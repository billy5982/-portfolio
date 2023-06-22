import { techStack } from '@/data/aboutData';
import StackLogoWrapper from './StackLogoWrapper';

const StackContainer = () => {
  return (
    <>
      <h2 className="text-subTitle"> Tech Stack</h2>
      <div className="w-full flex flex-row flex-wrap justify-center relative">
        {techStack.map((stack, idx) => (
          <StackLogoWrapper stackInfo={stack} key={idx} id={idx} />
        ))}
      </div>
    </>
  );
};

export default StackContainer;
