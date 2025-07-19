"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import "../globals.css";
import ContentBox from "../components/ContentBox";
import { ContentBoxInputs, ContentBoxType } from "@/app/types/types";
import { HeroText } from "../components/HeroText";
import * as utils from "../lib/utils";

export default function Technology() {
  const [content, setContent] = useState<ContentBoxType[]>([]);
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const [pageHeight, setPageHeight] = useState<number>(100);

  const techStack: ContentBoxInputs[] = [
    {
      title: "Typescript",
      text: "placeholder text",
      boxId: "1",
      location: { top: 10, left: 4 },
    },
    {
      title: "React",
      text: "placeholder text",
      boxId: "2",
      location: { top: 14, left: 4 },
    },
    {
      title: "Next.js",
      text: "placeholder text",
      boxId: "3",
      location: { top: 18, left: 4 },
    },
  ];

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <HeroText textArray={["TECH"]} />

      {techStack.map((box, index) => (
        <ContentBox
          key={index}
          title={box.title}
          text={box.text}
          boxno={box.boxId}
          location={box.location}
          zIndex={zIndexStack.indexOf(box.boxId) + 1}
          bringToFront={() => utils.bringToFront(box.boxId, setZIndexStack)}
        />
      ))}
    </div>
  );
}
