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

      // progress from 0 (cards offscreen) to 1 (cards fully stacked)
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cardWidth = 324;
  const overlap = 0.9; // adjust how much the cards overlap

  return (
    <div
      ref={containerRef}
      style={{
        height: cardWidth * cards.length + 880, // total scrollable area
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
          const startX = index * cardWidth;
          const endX = index * cardWidth * (1 - overlap);

          const translateX = startX - scrollProgress * (startX - endX);

          const zIndex = cards.length + index;

          return (
            <div
              key={card.id}
              style={{
                position: "absolute",
                left: `${translateX}px`,
                zIndex,
                transition: "transform 0.3s linear",
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
