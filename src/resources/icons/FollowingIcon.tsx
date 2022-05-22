import React from "react";

interface IFollowingIconProps {
  color?: string;
  height?: string | number;
  width?: string | number;
}

const FollowingIcon = ({
  color = "#808080",
  height = 25,
  width = 25,
}: IFollowingIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0553 8.73877C16.0553 10.9488 14.2591 12.7388 12.0415 12.7388C9.82383 12.7388 8.02763 10.9488 8.02763 8.73877C8.02763 6.52877 9.82383 4.73877 12.0415 4.73877C14.2591 4.73877 16.0553 6.52877 16.0553 8.73877ZM4.01379 18.7388C4.01379 16.0788 9.36224 14.7388 12.0415 14.7388C14.7207 14.7388 20.0692 16.0788 20.0692 18.7388V19.7388C20.0692 20.2888 19.6176 20.7388 19.0657 20.7388H5.01725C4.46535 20.7388 4.01379 20.2888 4.01379 19.7388V18.7388Z"
        fill={color}
      />
    </svg>
  );
};

export default FollowingIcon;
