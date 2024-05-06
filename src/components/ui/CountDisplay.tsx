interface CountDisplayProps {
  title: string;
  count: number;
}

function CountDisplay({ title, count }: CountDisplayProps) {
  return (
    <div>
      <p>{title}</p>
      <p className="text-center text-lg font-bold sm:text-left">{count}</p>
    </div>
  );
}

export default CountDisplay;
