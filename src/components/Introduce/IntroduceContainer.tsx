import { useSwiper } from 'swiper/react';

const IntroduceContainer = () => {
  const swiper = useSwiper();

  const goToNextPage = () => swiper.slideNext();
  return (
    <section className="w-[80%] flex flex-col md:w-[40%] gap-[3vmax] md:gap-[1.5vmax]">
      <article>
        <h1 className="text-mainTitle">FrontEnd-Developer</h1>
        <h2 className="text-subTitle">Lee Myeong Gyu</h2>
      </article>
      <article className="text-descSize leading-loose">
        <h3 className="text-highlight">징검다리를 꿈꾸는 개발자</h3>
        <p>
          사용자 입장에서 서비스를 바라봄으로써, 편리함과 유익한 경험을 제공하는 프론트엔드 개발자가
          되기 위해 공부하고 있습니다.
        </p>
      </article>
      <article
        onClick={goToNextPage}
        className="text-highlight flex items-center gap-2 cursor-pointer group"
      >
        <span>About me</span>
        <span className="group-hover:rotate-90 duration-200">{'>'}</span>
      </article>
    </section>
  );
};

export default IntroduceContainer;
