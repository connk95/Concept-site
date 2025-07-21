import { JSX, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "./Icons";
import "../globals.css";
import * as React from "react";
import Link from "next/link";

const Tree: React.FC<{
  defaultOpen?: boolean;
  name: string | JSX.Element;
  children?: React.ReactNode;
  url?: string;
}> = ({ children, name, defaultOpen, url }) => {
  const [isOpen, setOpen] = useState(defaultOpen);

  const Icon = Icons[
    `${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`
  ] as React.ElementType;

  const content = (
    <motion.div
      className="tree-content"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { height: "auto", opacity: 1, y: 0 },
        closed: { height: 0, opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="tree-frame">
      <Icon
        className="tree-toggle"
        style={{ opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      {url ? (
        <Link href={url} className="tree-title">
          {name}
        </Link>
      ) : (
        <span className="tree-title">{name}</span>
      )}
      {url ? <Link href={url}>{content}</Link> : content}
    </div>
  );
};

export default Tree;
