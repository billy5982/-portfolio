interface LinkProps {
  href: string;
  src: string;
  desc: string;
}

const LinkContainer = ({ src, href, desc }: LinkProps) => {
  return (
    <a href={href} className="flex items-center bg-captionbg w-fit rounded-md ">
      <div className="px-1.5 py-1.5 bg-logoBg rounded-md md:rounded-l-md md:rounded-r-[0]">
        <img src={src} className="h-5" />
      </div>
      <div className="px-3 py-1.5 text-stack hidden md:block ">
        <span className="text-caption1">npm </span>
        <span className="text-caption2">run </span>
        <span>{desc}</span>
      </div>
    </a>
  );
};

export default LinkContainer;
