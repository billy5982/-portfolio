import ImageCaptionContainer from '@/components/ProjectPage/ImageCaptionContainer';
import ProjectPreviewContainer from '@/components/ProjectPage/ProjectPreviewContainer';
import { ProjectPreviewType } from '@/data/ProjectData';

interface ProjectMainProps {
  content: ProjectPreviewType;
}

const ProjectMain = ({ content }: ProjectMainProps) => {
  return (
    <div className="w-full h-full flex flex-col-reverse justify-end items-center md:flex-row md:justify-around md:items-center">
      <div className="w-[90%] md:w-[45%]">
        <ProjectPreviewContainer data={content.projectPreview} />
      </div>
      <div className="w-[90%] md:w-[45%]">
        <ImageCaptionContainer data={content.imgLink} />
      </div>
    </div>
  );
};

export default ProjectMain;
