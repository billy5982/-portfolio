import ImageCaptionContainer from '@/components/ProjectPage/ImageCaptionContainer';
import ProjectPreviewContainer from '@/components/ProjectPage/ProjectPreviewContainer';
import { ProjectPreviewType } from '@/data/ProjectData';

interface ProjectMainProps {
  content: ProjectPreviewType;
  vertical?: boolean;
}

const ProjectMain = ({ content, vertical }: ProjectMainProps) => {
  return (
    <div className="w-full h-full flex flex-col-reverse justify-center items-center md:flex-row md:justify-around md:items-center">
      <div className="w-[90%] md:w-[45%]">
        <ProjectPreviewContainer data={content.projectPreview} />
      </div>
      <div className="w-[45%] md:w-[45%]">
        <ImageCaptionContainer data={content.imgLink} vertical={vertical ? true : false} />
      </div>
    </div>
  );
};

export default ProjectMain;
