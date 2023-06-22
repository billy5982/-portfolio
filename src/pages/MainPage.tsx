import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, HashNavigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from 'react';
import Nav from '@/components/Common/Nav';
import { Swiper as SwiperType } from 'swiper/types';
import IntroPage from './IntroPage';
import AboutPage from './AboutPage';

const MainPage = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const goToSlide = (slideIndex: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.slideTo(slideIndex);
      setCurrentIdx(slideIndex);
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const activeIndex = swiper.activeIndex;
      swiper.slideTo(activeIndex);
      setCurrentIdx(swiper.activeIndex >= 2 ? 2 : swiper.activeIndex);
    }
  }, []);

  const slideChange = (swiper: SwiperType) => {
    setCurrentIdx(swiper.activeIndex >= 2 ? 2 : swiper.activeIndex);
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 min-w-xs md:p-12">
      <Nav moveFn={goToSlide} currentSlideIndex={currentIdx} />
      <Swiper
        // install Swiper modules
        ref={swiperRef}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        hashNavigation={{ watchState: true }}
        modules={[Mousewheel, Pagination, HashNavigation]}
        onSlideChange={slideChange}
        initialSlide={0}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide data-hash="Home">
          <IntroPage />
        </SwiperSlide>
        <SwiperSlide data-hash="About">
          <AboutPage />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full" data-hash="Project">
          Project1
        </SwiperSlide>
        <SwiperSlide className="w-full h-full" data-hash="Project">
          Project2
        </SwiperSlide>
        <SwiperSlide className="w-full h-full" data-hash="Project">
          Project3
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MainPage;
