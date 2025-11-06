const Chip = ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className="w-fit h-fit px-2 md:px-3 py-0.5 rounded-full bg-gray-50 text-xs md:text-sm text-gray-700 select-none border border-neutral-300"
      {...props}
    >
      {children}
    </div>
  );
};

export default Chip;
