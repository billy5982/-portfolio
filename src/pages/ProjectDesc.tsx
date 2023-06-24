import DetailDesc from '@/components/ProjectPage/DetailDesc';
import SpriteAnimate from '@/components/ProjectPage/SpriteAnimate';
import SpriteAnimateVerti from '@/components/ProjectPage/SpriteAnimateVerti';
import { ProjectDetail } from '@/data/ProjectData';

interface DescProps {
  content: ProjectDetail;
  vertical: boolean;
}

const ProjectDesc = ({ content, vertical }: DescProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-[3vh] md:gap-0 items-center md:flex-row md:justify-around md:items-center">
      <div className="w-[90%] md:w-[45%] flex justify-center ">
        {content.imgContainer && !vertical && (
          <SpriteAnimate url={content.imgContainer.src} steps={content.imgContainer.steps} />
        )}
        {/* vertical 넣어주기 */}
        {content.imgContainer && vertical && (
          <div className="w-[35%] md:w-[40%] flex justify-center relative">
            <SpriteAnimateVerti url={content.imgContainer.src} steps={content.imgContainer.steps} />
          </div>
        )}
      </div>
      <div className="w-[90%] md:w-[45%] flex flex-col justify-center gap-[3vh]">
        <DetailDesc data={content.PageDesc} />
      </div>
    </div>
  );
};

export default ProjectDesc;
