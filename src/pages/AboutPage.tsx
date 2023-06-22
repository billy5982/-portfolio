import StackContainer from '@/components/AboutPage/StackContainer';
import DescContainer from '@/components/Common/DescContainer';
import { aboutData } from '@/data/aboutData';

const AboutPage = () => {
  return (
    <div className="h-full w-full flex flex-col  leading-loose justify-center">
      <h2 className="text-subTitle ">About Me</h2>
      <div className=" w-full flex flex-col items-center justify-center gap-5 md:gap-0 md:flex-row md:justify-between ">
        <div className="flex w-[90%] flex-col gap-5 md:gap-[2.5vh] md:w-[45%]">
          {aboutData.map((el, idx) => (
            <DescContainer key={idx} {...el} />
          ))}
        </div>
        <div className="flex flex-col items-start w-[90%] md:w-[45%] md:mr-[3%]">
          <StackContainer />
        </div>
      </div>
      {/* 로고 flex */}
    </div>
  );
};
export default AboutPage;
