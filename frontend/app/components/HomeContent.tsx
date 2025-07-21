"use client";

import { useEffect, useState } from "react";
import { ContentBox } from "./ContentBox";
import { ContentBoxType } from "../types/types";
import * as utils from "../lib/utils";
import { HeroText } from "./HeroText";

export default function HomeContent() {
  const [blurry, setBlurry] = useState(true);
  const [content, setContent] = useState<ContentBoxType[]>([]);
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const [pageHeight, setPageHeight] = useState<number>(0);

  useEffect(() => {
    const initialContent = [
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        link: "/",
        boxId: "1",
        location: undefined,
        imageUrl: undefined,
      },
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        link: "/",
        boxId: "2",
        location: undefined,
        imageUrl: undefined,
      },
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        link: "/",
        boxId: "3",
        location: undefined,
        imageUrl: undefined,
      },
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        link: "/",
        boxId: "4",
        location: undefined,
        imageUrl: undefined,
      },
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        link: "/",
        boxId: "5",
        location: undefined,
        imageUrl: undefined,
      },
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        link: "/",
        boxId: "6",
        location: undefined,
        imageUrl: undefined,
      },
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        link: "/",
        boxId: "7",
        location: undefined,
        imageUrl: undefined,
      },
    ];
    utils.randomizeLocations(initialContent, setPageHeight, setContent);
  }, []);

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
      <HeroText textArray={["BIG", "HERO TEXT"]} />

      {content.map((box, index) => (
        <ContentBox
          key={index}
          title={box.title}
          text={box.text}
          link={box.link}
          boxId={box.boxId}
          location={box.location}
          imageUrl={box.imageUrl}
          zIndex={zIndexStack.indexOf(box.boxId) + 1}
          blur={true}
          bringToFront={() => utils.bringToFront(box.boxId, setZIndexStack)}
        />
      ))}
    </div>
  );
}
