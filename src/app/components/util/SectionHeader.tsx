interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className="flex items-center gap-8 mb-12"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-[1px] bg-crust" />
      <h2>
          <span className="text-3xl md:text-5xl font-black text-end">
            {title}
            <span className="text-peach">.</span>
          </span>
      </h2>
    </div>
  );
};

export default SectionHeader;

// path: src/app/components/util/SectionHeader.tsx
