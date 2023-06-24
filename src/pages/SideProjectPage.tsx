import SideProjectContainer from '@/components/ProjectPage/SideProjectContainer';
import { SideProjectType } from '@/data/ProjectData';

interface SideProjectProps {
  content1: SideProjectType;
  content2: SideProjectType;
}

const SideProjectPage = ({ content1, content2 }: SideProjectProps) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row md:justify-around md:items-center">
      <SideProjectContainer content={content1} />
      <SideProjectContainer content={content2} />
    </div>
  );
};

export default SideProjectPage;
