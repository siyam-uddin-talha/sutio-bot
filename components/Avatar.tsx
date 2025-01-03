import React from "react";

interface AvatarProps {
  src?: string; // Optional image source
  alt?: string; // Optional alt text, used for displaying initials if no image
  size?: "small" | "medium" | "large" | "xlarge"; // Avatar size options
  rounded?: boolean; // Option to make avatar rounded
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  rounded = true,
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
    xlarge: "w-24 h-24",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${
        rounded ? "rounded-full" : "rounded-lg"
      } overflow-hidden border border-gray-300 shadow-sm`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || "Avatar"}
          className="size-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center size-full bg-gray-200 text-gray-600 font-semibold">
          {alt ? alt[0].toUpperCase() : "A"}
        </div>
      )}
    </div>
  );
};

export default Avatar;
