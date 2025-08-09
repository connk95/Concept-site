"use client";

import { useState } from "react";
import { ContentBox } from "../../components/ContentBox";
import { HeroText } from "../../components/HeroText";
import * as utils from "../../lib/utils";
import { ContentBoxType } from "../../types/types";

type Props = {
  project: ContentBoxType;
};

export default function ProjectContent({ project }: Props) {
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const pageHeight = 50;

  const heroText = project.title?.split(" ") ?? [];

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <HeroText textArray={heroText} />
      <ContentBox
        id={null}
        slug={null}
        title={project.title}
        text={project.text}
        location={{ top: 9, left: 4 }}
        remWidth={50}
        imageUrl={project.imageUrl}
        layout="horizontal"
        blur={false}
        zIndex={zIndexStack.indexOf(`${project.id}`) + 1}
        bringToFront={() => utils.bringToFront(`${project.id}`, setZIndexStack)}
      />
    </div>
  );
}
