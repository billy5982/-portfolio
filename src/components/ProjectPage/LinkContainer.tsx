interface LinkProps {
  href: string;
  src: string;
  desc: string;
}

const LinkContainer = ({ src, href, desc }: LinkProps) => {
  return (
    <a href={href} className="flex items-center bg-captionbg w-fit rounded-md">
      <div className="px-2 py-2 bg-logoBg rounded-l-md">
        <img src={src} className="h-6" />
      </div>
      <div className="px-3 py-2 text-stack">
        <span className="text-caption1">npm </span>
        <span className="text-caption2">run </span>
        <span>{desc}</span>
      </div>
    </a>
  );
};

export default LinkContainer;
