import type { SVGProps } from "react";
import type { IconName } from "@/types/resume";

const stroked: Partial<Record<IconName, string>> = {
  globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM22 7l-10 6L2 7",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z",
  "map-pin": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  print:
    "M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z",
  "arrow-right": "M5 12h14M13 5l7 7-7 7",
  "arrow-up-right": "M7 17 17 7M8 7h9v9",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z",
};

const filled: Partial<Record<IconName, string>> = {
  github:
    "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.1 5 18.1 5.3 18.1 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 21.5h5.2V9.7H2.4v11.8ZM10 9.7h5v1.6h.1a5.5 5.5 0 0 1 4.9-2.7c5.2 0 6.2 3.4 6.2 7.9v5h-5.2v-4.4c0-1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.4v4.4H10V9.7Z",
  twitter:
    "M18.2 2.2h3.4l-7.4 8.5 8.7 11.1h-6.8l-5.3-6.8-6.1 6.8H1.3l7.9-9-8.3-10.6h7l4.8 6.2 5.5-6.2Zm-1.2 17.6h1.9L7.1 4.1H5.1l11.9 15.7Z",
  telegram:
    "M23.1 3.6 19.6 20c-.3 1.2-1 1.5-2 .9l-5.5-4-2.6 2.5c-.3.3-.6.6-1.2.6l.4-5.6L18.8 5c.4-.4-.1-.6-.7-.2L5.5 12.7l-5.4-1.7c-1.2-.4-1.2-1.2.2-1.7L21.6 1.1c1-.4 1.8.2 1.5 2.5Z",
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 16, ...props }: IconProps) => {
  const strokedPath = stroked[name];
  const filledPath = filled[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={strokedPath ? "none" : "currentColor"}
      stroke={strokedPath ? "currentColor" : "none"}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}>
      <path d={strokedPath ?? filledPath ?? ""} />
    </svg>
  );
};
