"use client";

import { useEffect, useState } from "react";
import Draggable from "./Draggable";
import Tree from "./Tree";
import Link from "next/link";
import { NetworkContentBoxType } from "../types/types";

type NavbarProps = {
  projects: NetworkContentBoxType[];
};

const Navbar: React.FC<NavbarProps> = ({ projects }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div style={{ height: "8rem", paddingBottom: "9rem" }} />
      <div
        className="header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#0a0a0a",
          transition: "height 0.3s ease-in-out",
          height: scrolled ? "4.3rem" : "8rem",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          zIndex: 10000,
        }}
      >
        <div>
          <h3
            className="jp"
            style={{
              position: "absolute",
              left: "30px",
              fontSize: "82px",
              fontFamily: "Zen Kaku Gothic New",
              fontStyle: "normal",
              top: scrolled ? "-29px" : "30px",
              textShadow: "none",
              color: "#95d92e",
              transition: "all 0.3s ease-in-out",
            }}
          >
            回
          </h3>
          <h3
            className="title"
            style={{
              position: "absolute",
              left: "120px",
              top: scrolled ? "-23px" : "36px",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Link href="/">WEBSITE TITLE</Link>
          </h3>
          <h3
            style={{
              position: "absolute",
              left: "288px",
              fontSize: "56px",
              top: scrolled ? "-96px" : "77px",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </div>
        <Draggable>
          <div
            className="content-box menu-box"
            style={{
              transition: "all 0.3s ease-in-out",
              top: scrolled ? "3.2rem" : "5rem",
            }}
          >
            <div className="tree-container">
              <Tree name="Menu">
                <Tree name="Home" url="/" />
                <Tree name="Services">
                  <Tree name="Website" />
                </Tree>
                <Tree name="Portfolio">
                  {projects.map((project) => (
                    <Tree
                      key={project.slug}
                      name={project.title || ""}
                      url={`/projects/${project.slug}`}
                    />
                  ))}
                </Tree>
                <Tree name="Technology" url="/technology" />
                <Tree name="About" />
                <Tree name="Contact" />
              </Tree>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Navbar;
