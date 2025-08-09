"use client";

import React, { useState } from "react";
import { ContentBox } from "../../components/ContentBox";
import { HeroText } from "../../components/HeroText";
import * as utils from "../../lib/utils";
import { NetworkContentBoxType } from "../../types/types";

type Props = {
  project: NetworkContentBoxType;
};

export const ProjectContent: React.FC<Props> = ({ project }) => {
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
        id={project.id}
        title={project.title}
        text={project.text}
        location={{ top: 9, left: 4 }}
        remWidth={50}
        imageUrl={project.imageUrl}
        layout="horizontal"
        zIndex={zIndexStack.indexOf(`${project.id}`) + 1}
        bringToFront={() => utils.bringToFront(`${project.id}`, setZIndexStack)}
      />
    </div>
  );
};
