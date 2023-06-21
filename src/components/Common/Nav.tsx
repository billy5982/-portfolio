interface NavProps {
  moveFn: (slideIndex: number) => void;
  currentSlideIndex: number;
}

const Nav = ({ moveFn, currentSlideIndex }: NavProps) => {
  const navMenu = ['Home', 'About', 'Project'];

  return (
    <nav className=" w-full z-50 text-[1.5vmax] md:text-[2vmax]">
      <ul className="flex w-full gap-[4vw] md:gap-20 md:justify-start">
        {navMenu.map((text, idx) => (
          <li
            onClick={() => moveFn(idx)}
            key={text}
            className={`${
              idx === currentSlideIndex ? 'border-b-2 border-b-highlight' : ''
            } cursor-pointer`}
          >
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
