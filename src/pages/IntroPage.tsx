import MainLogo from '@/assets/MainLogo.svg';
import IntroduceContainer from '@/components/Introduce/IntroduceContainer';

const IntroPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center  md:flex-row md:justify-around">
      <img src={MainLogo} className="w-[80%] mb-[10%] md:mb-0 md:w-[35%] md:mr-10" />
      <IntroduceContainer />
    </div>
  );
};

export default IntroPage;

// text - 6vmax
//
