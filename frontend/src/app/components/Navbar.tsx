"use client";

import { useEffect, useRef, useState } from "react";
import Draggable from "./Draggable";
import Tree from "./Tree";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;

      const rect = navbarRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;

      if (rect.top <= 0 && !isFixed) {
        setIsFixed(true);
        setFixedTop(scrollY);
      } else if (scrollY < fixedTop) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed, fixedTop]);

  return (
    <div>
      <div
        className="header"
        style={{
          position: isFixed ? "relative" : "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "",
          transition: "height 0s ease-in-out",
          height: isFixed ? "8rem" : "4.3rem",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          opacity: 0,
          zIndex: 10000,
        }}
      ></div>
      <div
        ref={navbarRef}
        className="header"
        style={{
          position: isFixed ? "fixed" : "relative",
          top: 0,
          width: "100%",
          backgroundColor: "#0a0a0a",
          transition: "height 0.5s ease-in-out",
          height: isFixed ? "4.3rem" : "8rem",
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
              transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out",
              top: isFixed ? "-29px" : "30px",
              textShadow: "none",
              color: "#95d92e",
            }}
          >
            回
          </h3>
          <h3
            className="title"
            style={{
              position: "absolute",
              left: "120px",
              transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out",
              top: isFixed ? "-23px" : "36px",
            }}
          >
            WEBSITE TITLE
          </h3>
          <h3
            style={{
              position: "absolute",
              left: "288px",
              transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out",
              fontSize: "56px",
              top: isFixed ? "-96px" : "77px",
            }}
          >
            {" "}
          </h3>
        </div>
        <Draggable>
          <div
            className="content-box menu-box"
            style={{
              transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out",
              top: isFixed ? "3.2rem" : "5rem",
            }}
          >
            <div className="tree-container">
              <Tree name="Menu">
                <Tree name="Products">
                  <Tree name="Category 1" />
                  <Tree name="Category 2" />
                  <Tree name="Category 3" />
                </Tree>
                <Tree name="Cart" />
                <Tree name="About" />
                <Tree name="Login" />
              </Tree>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Navbar;
