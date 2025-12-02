import React from "react";
import CircularText from "./CircularText";

interface CircularTextWithImageProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const CircularTextWithImage: React.FC<CircularTextWithImageProps> = ({
  text,
  spinDuration = 15,
  onHover = "speedUp",
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer decorative rings */}
      <div className="absolute w-96 h-96 md:w-[420px] md:h-[420px] rounded-full border border-amber-500/20 animate-pulse" />
      <div className="absolute w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full border border-amber-400/30" />

      {/* Animated gradient glow */}
      <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 blur-2xl animate-spin-slow" />

      {/* CircularText */}
      <CircularText
        text={text}
        spinDuration={spinDuration}
        onHover={onHover}
        className="absolute w-72 h-72 md:w-80 md:h-80"
      />

      {/* Profile image container with gradient border */}
      <div className="relative group">
        {/* Gradient border ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-spin" />

        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-md" />

        {/* Profile image */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl shadow-amber-500/25 ring-4 ring-base-300/50 group-hover:scale-105 group-hover:shadow-amber-500/40 transition-all duration-500 z-10"
        />
      </div>

      {/* Floating decorative dots */}
      <div
        className="absolute top-4 right-8 w-3 h-3 bg-amber-400 rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-8 left-4 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-50"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/4 left-0 w-2 h-2 bg-amber-300 rounded-full animate-bounce opacity-40"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default CircularTextWithImage;
