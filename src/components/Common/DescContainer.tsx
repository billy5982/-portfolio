interface AboutTextContainerProps {
  title?: string;
  desc: string;
}

const DescContainer = ({ title, desc }: AboutTextContainerProps) => {
  return (
    <div className="flex flex-col ">
      {title && <h3 className="text-primaryTitle text-highlight">{title}</h3>}
      <p className="text-descSize">{desc}</p>
    </div>
  );
};

export default DescContainer;
