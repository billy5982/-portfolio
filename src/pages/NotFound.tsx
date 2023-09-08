import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="absolute top-0 left-0 flex flex-col gap-[2vw] md:gap-[1vw] justify-center items-center h-full w-full p-5 min-w-xs md:p-12">
      <p className="md:text-[2vw] text-[5vw]">페이지를 찾을 수 없습니다.</p>
      <Link
        to="/"
        className="text-highlight text-[3vw] px-[3vw] py-[2vw] rounded-full border-highlight border-2 md:px-[1.5vw] md:py-[0.5vw] md:text-[1.5vw]"
      >
        메인으로 돌아가기
      </Link>
    </div>
  );
}
