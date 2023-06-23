import { ImgLinkType } from '@/data/ProjectData';
import LinkContainer from './LinkContainer';
import SpriteAnimate from './SpriteAnimate';

interface CaptionProps {
  data: ImgLinkType;
}

const ImageCaptionContainer = ({ data }: CaptionProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      {data && (
        <>
          <div className="flex flex-row gap-3 flex-wrap justify-end md:justify-start">
            <LinkContainer src={data.github[0]} desc={data.github[1]} href={data.github[2]} />
            <LinkContainer src={data.project[0]} desc={data.project[1]} href={data.project[2]} />
            <LinkContainer src={data.docs[0]} desc={data.docs[1]} href={data.docs[2]} />
          </div>
          <div className="w-full flex justify-center">
            <SpriteAnimate url={data.main} />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCaptionContainer;
