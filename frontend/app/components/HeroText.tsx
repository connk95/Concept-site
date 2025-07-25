"use client";

import { Parallax } from "react-scroll-parallax";

export const HeroText: React.FC<{
  textArray?: string[];
}> = ({ textArray }) => {
  return (
    <div>
      <Parallax speed={5} className="parallax-layer">
        <div className="hero-text">
          {textArray?.map((text, index) => (
            <p key={index} style={{ color: "#95d92e" }}>
              {text}
              <br />
            </p>
          ))}
        </div>
      </Parallax>
    </div>
  );
};
