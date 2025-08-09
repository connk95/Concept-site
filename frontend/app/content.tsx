"use client";

import { useEffect, useState } from "react";
import { ContentBox } from "./components/ContentBox";
import { NetworkContentBoxType } from "./types/types";
import * as utils from "./lib/utils";
import { HeroText } from "./components/HeroText";

export default function HomeContent({
  projects,
}: {
  projects: NetworkContentBoxType[];
}) {
  const [blurry, setBlurry] = useState(true);
  const [content, setContent] = useState<NetworkContentBoxType[]>([]);
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const [pageHeight, setPageHeight] = useState<number>(0);

  useEffect(() => {
    utils.randomizeLocations(projects, setPageHeight, setContent);
  }, [projects]);

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <div className="toggle-blur">
        <label className="switch">
          <input
            type="checkbox"
            className="blob-check"
            onChange={() => utils.toggleBlur(blurry, setBlurry)}
          />
          <span className="slider"></span>
        </label>
        <p>toggle blur</p>
      </div>

      <HeroText textArray={["BIG", "HERO", "TEXT"]} />

      {content.map((box, index) => (
        <ContentBox
          key={index}
          title={box.title}
          text={box.text}
          buttonLink={`/projects/${box.slug}`}
          location={box.location}
          blur={true}
          zIndex={zIndexStack.indexOf(`${box.id}`) + 1}
          bringToFront={() => utils.bringToFront(`${box.id}`, setZIndexStack)}
        />
      ))}
    </div>
  );
}
