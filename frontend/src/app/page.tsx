"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import "./globals.css";
import { ContentBox } from "./components/ContentBox";
import { ContentBoxType } from "./types/types";
import * as utils from "./lib/utils";
import { HeroText } from "./components/HeroText";

// TODO: Fix body parallax when navbar fixes position
// parallax speeds are active when page y = 0
// but body elements move at same speed beyond y > 0

export default function Page() {
  const [blurry, setBlurry] = useState(true);
  const [content, setContent] = useState<ContentBoxType[]>([]);
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const [pageHeight, setPageHeight] = useState<number>(0);

  useEffect(() => {
    const initialContent = [
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        boxid: "1",
        location: undefined,
        imageUrl: undefined,
      },
      {
        title: "Subtitle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        boxid: "2",
        location: undefined,
        imageUrl: undefined,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        boxid: "3",
        location: undefined,
        imageUrl: undefined,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        boxid: "4",
        location: undefined,
        imageUrl: undefined,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        boxid: "5",
        location: undefined,
        imageUrl: undefined,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        boxid: "6",
        location: undefined,
        imageUrl: undefined,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab repellendus voluptatem vero at labore eligendi mollitia quaerat in delectus! Quis.",
        boxid: "7",
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
          boxno={box.boxid}
          location={box.location}
          imageUrl={box.imageUrl}
          zIndex={zIndexStack.indexOf(box.boxid) + 1}
          bringToFront={() => utils.bringToFront(box.boxid, setZIndexStack)}
        />
      ))}
    </div>
  );
}
