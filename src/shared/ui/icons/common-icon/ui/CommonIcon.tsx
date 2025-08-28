import type React from "react";

import type { CommonIconProps } from "./types";

export const CommonIcon: React.FC<CommonIconProps> = ({
  src,
  alt
}) => {
  return <img 
    src={src}
    alt={alt}
    className="mx-auto h-16 w-auto" 
  />;
};
