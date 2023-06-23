// p-2.5 2
const Stack = ({ stack }: { stack: string }) => {
  return (
    <span className="absolute top-3 text-highlight text-stack rounded-full px-3 py-1.5 border-highlight border-2">
      {stack}
    </span>
  );
};

export default Stack;
