import React from "react";

interface BoxProps {
  title: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div className="border border-sky-500/30 rounded-xl p-6 bg-[#1a1a2e] shadow-md shadow-sky-500/10">
      <h2 className="text-2xl font-semibold text-sky-300 mb-4 drop-shadow-[0_0_6px_#00f0ff]">
        {title}
      </h2>
      <div className="text-gray-300">{children}</div>
    </div>
  );
};

export default Box;
