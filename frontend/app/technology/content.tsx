"use client";

import { useState } from "react";
import { ContentBox } from "../components/ContentBox";
import { HeroText } from "../components/HeroText";
import * as utils from "../lib/utils";
import { ContentBoxType } from "../types/types";

export default function TechnologyContent() {
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const pageHeight = 50;

  const techStack: ContentBoxType[] = [
    {
      id: null,
      slug: null,
      title: "Typescript",
      text: "TypeScript is a smarter version of JavaScript that catches errors early and makes code easier to understand and maintain. We use it to build faster, safer, and more scalable websites with fewer bugs.",
      location: { top: 9, left: 4 },
      remWidth: 50,
      imageUrl: "/assets/typescript.png",
      blur: false,
    },
    {
      id: null,
      slug: null,
      title: "React",
      text: "React is a JavaScript library for building dynamic, fast, and interactive user interfaces. It makes websites easier to develop and update by breaking the UI into reusable components.",
      location: { top: 25, left: 4 },
      remWidth: 50,
      imageUrl: "/assets/atom.png",
      blur: false,
    },
    {
      id: null,
      slug: null,
      title: "Next.js",
      text: "Next.js is a React framework that adds powerful features like server-side rendering and static site generation. It helps build fast, SEO-friendly websites with an optimized user and developer experience.",
      location: { top: 40, left: 4 },
      remWidth: 50,
      imageUrl: "/next.svg",
      blur: false,
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
          id={null}
          slug={null}
          title={box.title}
          text={box.text}
          // boxId={box.boxId}
          location={box.location}
          remWidth={box.remWidth}
          imageUrl={box.imageUrl}
          layout="horizontal"
          blur={false}
          // zIndex={zIndexStack.indexOf(box.boxId) + 1}
          zIndex={zIndexStack.indexOf(`${index}`) + 1}
          // bringToFront={() => utils.bringToFront(box.boxId, setZIndexStack)}
          bringToFront={() => utils.bringToFront(`${index}`, setZIndexStack)}
        />
      ))}
    </div>
  );
}
