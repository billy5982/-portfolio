// p-2.5 2
const Stack = ({ stack }: { stack: string }) => {
  return (
    <span className=" text-highlight text-stack rounded-full px-2 py-1 border-highlight border-2">
      {stack}
    </span>
  );
};

export default Stack;
