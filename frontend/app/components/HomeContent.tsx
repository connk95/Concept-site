"use client";

import { useEffect, useState } from "react";
import { ContentBox } from "./ContentBox";
import { ContentBoxType } from "../types/types";
import * as utils from "../lib/utils";
import { HeroText } from "./HeroText";
import { ContentBoxInputs } from "../types/types";

export default function HomeContent() {
  const [blurry, setBlurry] = useState(true);
  const [content, setContent] = useState<ContentBoxType[]>([]);
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [projects, setProjects] = useState<ContentBoxInputs[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

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
          link={`/projects/${box.title}`}
          //   boxId={box.boxId}
          location={box.location}
          imageUrl={box.imageUrl}
          //   zIndex={zIndexStack.indexOf(box.boxId) + 1}
          zIndex={zIndexStack.indexOf(`${box.id}`) + 1}
          blur={true}
          //   bringToFront={() => utils.bringToFront(box.boxId, setZIndexStack)}
          bringToFront={() => utils.bringToFront(`${box.id}`, setZIndexStack)}
        />
      ))}
    </div>
  );
}
