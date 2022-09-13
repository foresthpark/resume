import React from "react";

const Badge = ({ tech, key }: { tech: string; key: number }) => {
  return (
    <span
      key={key}
      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
    >
      {tech}a
    </span>
  );
};

export default Badge;
