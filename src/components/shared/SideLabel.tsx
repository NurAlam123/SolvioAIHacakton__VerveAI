const SideLabel = () => {
  return (
    <aside className="text-5xl absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[calc(50%+8px)] -rotate-90 select-none max-md:hidden">
      <p className="font-bold tracking-widest">
        {"VERVE AI".split("").map((c, i) => (
          <span
            key={`char-${c}-${i + 1}`}
            className=" text-gray-300/40 hover:text-gray-300 inline-block transition-all ease-in-out hover:rotate-6 hover:scale-95"
          >
            {c}
          </span>
        ))}
      </p>
    </aside>
  );
};
export default SideLabel;
