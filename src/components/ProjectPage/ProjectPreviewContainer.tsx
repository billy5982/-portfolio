import { PreviewType } from '@/data/ProjectData';
import Stack from './Stack';

interface PreviewProps {
  data: PreviewType;
}

const ProjectPreviewContainer = ({ data }: PreviewProps) => {
  return (
    <div className="flex flex-col gap-[1vh] md:gap-[2vh] text-descSize leading-normal mt-[1vh] md:mt-0">
      <p className="text-desc">{data?.caption}</p>
      <h3 className="text-mainTitle">{data?.title}</h3>
      <p className="text-desc">{data?.subDesc}</p>
      <p>{data?.mainDesc}</p>
      {/* techStack */}
      <article>
        <h3 className="text-subTitle mt-[2vh] mb-[0.5vh]">TECH STACK</h3>
        <div className="flex flex-wrap gap-[2vh] ">
          {data?.Techs.map((el, idx) => (
            <Stack stack={el} key={idx} />
          ))}
        </div>
      </article>
      <article>
        <h3 className="text-subTitle mt-[2vh] mb-[0.5vh]">ROLES</h3>
        <div className="flex flex-wrap gap-[2vh] ">
          {data?.Roles.map((el, idx) => (
            <Stack stack={el} key={idx} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default ProjectPreviewContainer;
