import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import ProjectMain from './ProjectMain';
import ProjectDesc from './ProjectDesc';

import { ProjectDataType } from '@/data/ProjectData';

interface ProjectType {
  content: ProjectDataType;
  vertical?: boolean;
}
const ProjectPage = ({ content, vertical }: ProjectType) => {
  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Navigation]}
      className="h-full w-full "
    >
      <SwiperSlide className="flex w-full h-full">
        <ProjectMain content={content[0]} vertical={vertical ? true : false} />
      </SwiperSlide>
      <SwiperSlide className="h-full w-full">
        <ProjectDesc content={content[1]} vertical={vertical ? true : false} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectPage;
