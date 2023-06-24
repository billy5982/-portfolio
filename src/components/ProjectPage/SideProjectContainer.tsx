import { SideProjectType } from '@/data/ProjectData';
import LinkContainer from './LinkContainer';
import SpriteAnimate from './SpriteAnimate';
import Stack from './Stack';

interface SideProjectProps {
  content: SideProjectType;
}

const SideProjectContainer = ({ content }: SideProjectProps) => {
  const imgLink = content.imgLink;
  return (
    <div className="w-[90%] md:w-[45%] flex flex-col text-descSize h-full justify-around md:justify-center md:gap-3">
      <div className="flex flex-row items-center justify-between md:flex-col md:items-start">
        <h3 className="text-primaryTitle">{content.projectPreview.title}</h3>
        <div className="flex flex-wrap gap-2 justify-start md:justify-start">
          {imgLink.github.length > 0 && (
            <LinkContainer
              src={imgLink.github[0]}
              desc={imgLink.github[1]}
              href={imgLink.github[2]}
            />
          )}
          {imgLink.docs.length > 0 && (
            <LinkContainer src={imgLink.docs[0]} desc={imgLink.docs[1]} href={imgLink.docs[2]} />
          )}
          {imgLink.project.length > 0 && (
            <LinkContainer
              src={imgLink.project[0]}
              desc={imgLink.project[1]}
              href={imgLink.project[2]}
            />
          )}
        </div>
      </div>

      <div className="m-[0_auto] relative w-[30%] md:w-[80%]">
        <SpriteAnimate url={imgLink.main} steps={imgLink.steps} />
      </div>

      <p>{content.projectPreview.mainDesc}</p>
      <div>
        <h3 className="text-primaryTitle md:text-subTitle">TECH STACK</h3>
        <div className="flex flex-wrap gap-[1vh] md:gap-[2.5vh]">
          {content.projectPreview.Techs.map((el, idx) => (
            <Stack stack={el} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-primaryTitle md:text-subTitle">ROLES</h3>
        <div className="flex flex-wrap gap-[1vh] md:gap-[2.5vh]">
          {content.projectPreview.Roles.map((el, idx) => (
            <Stack stack={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProjectContainer;
