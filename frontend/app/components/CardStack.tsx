"use client";

import React, { useRef, useEffect, useState } from "react";
import { NetworkContentCardType } from "../types/types";
import { ContentCard } from "./ContentCard";

type Props = {
  cards: NetworkContentCardType[];
};

export const CardStack: React.FC<Props> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress for the section
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        5
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cardWidth = 324;
  const overlap = 0.999;

  return (
    <div
      ref={containerRef}
      style={{
        height: cardWidth * cards.length + 880,
        position: "relative",
        top: "15rem",
        left: "6rem",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "15rem",
          height: cardWidth,
          display: "flex",
          alignItems: "center",
        }}
      >
        {cards.map((card, index) => {
          const step = index / cards.length / 2;
          const offsetProgress = Math.min(
            Math.max((scrollProgress - step) / (1 - step), 0),
            1
          );

          const startX = index * cardWidth; // side by side at start
          const endX =
            index *
            (cardWidth * (1 - overlap * (cards.length / (cards.length - 0.4)))); // overlap after scroll

          const translateX = startX - offsetProgress * (startX - endX);

          const isActive = offsetProgress > 0 && offsetProgress < 1;
          const zIndex = isActive ? cards.length + 1 : cards.length - index;

          return (
            <div
              key={card.id}
              style={{
                position: "absolute",
                left: `${translateX}px`,
                zIndex,
                transition: "transform 0.1s linear",
              }}
            >
              <ContentCard {...card} remSize={{ height: 30, width: 20 }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
