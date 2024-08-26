import React from "react";

export const Chip = ({ children }: { children: string }) => {
  return (
    <span className="text-xs px-2 py-1 rounded bg-mantle">{children}</span>
  );
};

export default Chip;

// Path: src/app/components/util/Chip.tsx