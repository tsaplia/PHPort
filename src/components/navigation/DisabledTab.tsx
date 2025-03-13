import React from "react";

interface Props {
  className?: string;
  text: string;
}

export const DisabledTab: React.FC<Props> = ({ className, text }) => {
  return (
    <div
      className={`${className || ""} flex text-muted h-4 mb-4 cursor-wait select-none leading-none`}
    >
      {"// " + text}
    </div>
  );
};

export default DisabledTab;
