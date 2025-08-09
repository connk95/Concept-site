"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar";
import React from "react";
import { NetworkContentBoxType } from "./types/types";

type ClientLayoutProps = {
  projects: NetworkContentBoxType[];
  children: React.ReactNode;
};

export default function ClientLayout({
  projects,
  children,
}: ClientLayoutProps) {
  return (
    <ParallaxProvider>
      <Navbar projects={projects} />
      {children}
    </ParallaxProvider>
  );
}
