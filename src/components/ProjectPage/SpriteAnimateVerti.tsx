interface AnimateProps {
  steps?: number;
  url: string;
}

const SpriteAnimateVerti = ({ url, steps }: AnimateProps) => {
  return (
    <div
      className={`
        relative 
        before:block
        w-full
        before:pt-[215%] 
        `}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 
          bg-no-repeat bg-[0_100%] bg-[length:auto_100%]

        `}
        style={{
          backgroundImage: `url(${url})`,
          animation: `sprite 3.5s steps(${steps}) infinite`,
        }}
      ></div>
    </div>
  );
};
export default SpriteAnimateVerti;
