"use client";

import React, { useRef, useState } from "react";
import { NetworkContentCardType } from "../types/types";
import { ContentCard } from "./ContentCard";

type Props = {
  cards: NetworkContentCardType[];
};

export const CardStack: React.FC<Props> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const index = Math.floor(scrollLeft / 150);
      setActiveIndex(index);
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        display: "flex",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          style={{
            flexShrink: 0,
            width: "20rem",
            scrollSnapAlign: "start",
            transform: `translateY(${Math.max(
              0,
              (activeIndex - index) * 30
            )}px)`,
            zIndex: 1000 - Math.abs(activeIndex - index),
            transition: "transform 0.3s ease, z-index 0.3s ease",
          }}
        >
          <ContentCard
            id={card.id}
            title={card.title}
            text={card.text}
            imageUrl={card.imageUrl}
            remSize={{ height: 30, width: 20 }}
          />
        </div>
      ))}
    </div>
  );
};
