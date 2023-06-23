interface AnimateProps {
  steps?: number;
  url: string;
}
//  originX 값 미리 작성해놓기?
const SpriteAnimate = ({ url, steps }: AnimateProps) => {
  return (
    <div
      className={`
        relative 
        before:block
        w-[50%] 
        md:w-full
        before:pt-[69.23%] 
        `}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 
          bg-no-repeat bg-[0_100%] bg-[length:auto_100%]
          ${steps && `animate-[sprite_3.5s_steps(6)_infinite]`}
        `}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
};

export default SpriteAnimate;

// 650 450 md에 따라 세로 비율을 바껴야함.
// 세로
// 모바일 : 25% padding-top = (세로길이 450(originY)/25) * (가로길이 650(originX) / imgNums()) % \
// desktop (md) 45%: (세로길이 / 45) * (가로길이 / imgNums())
// const moblie = `w-[${(30 / originY) * (originX / imgNums)}%] `;
// const deskTop = `md:w-[${(45 / originY) * (originX / imgNums)}%] `;
//
