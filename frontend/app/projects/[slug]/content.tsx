"use client";

import React, { useState } from "react";
import { ContentBox } from "../../components/ContentBox";
import { HeroText } from "../../components/HeroText";
import * as utils from "../../lib/utils";
import { NetworkContentBoxType } from "../../types/types";
import { DraggableImageGrid } from "../../components/DraggableGrid";
import { ImageBox } from "../../components/ImageBox";

type Props = {
  project: NetworkContentBoxType;
};

export const ProjectContent: React.FC<Props> = ({ project }) => {
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const pageHeight = 50;

  const heroText = project.title?.split(" ") ?? [];

  console.log(project.imageUrl);

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
        buttonLink={project.demo}
        buttonText="demo"
        layout="horizontal"
        zIndex={zIndexStack.indexOf(`${project.id}`) + 1}
        bringToFront={() => utils.bringToFront(`${project.id}`, setZIndexStack)}
      />
      <div>
        <ImageBox
          id={project.id}
          imageUrl={project.imageUrl ?? ""}
          zIndex={zIndexStack.indexOf(`${project.id}`) + 1}
          location={{ top: 27, left: 4 }}
          remSize={{ width: 50, height: 25 }}
          bringToFront={() =>
            utils.bringToFront(`${project.id}`, setZIndexStack)
          }
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "25rem",
          right: "12rem",
          height: "20rem",
          width: "20rem",
          transition: "height 1s ease-in-out",
        }}
      >
        <DraggableImageGrid
          id={project.id}
          images={project.techImages ?? []}
          cols={3}
          remSize={{ width: 8, height: 4 }}
          gap={1.5}
          zIndexStack={zIndexStack}
          setZIndexStack={setZIndexStack}
        />
      </div>
    </div>
  );
};
