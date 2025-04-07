import { Parallax } from "react-scroll-parallax";
import Draggable from "./Draggable";

export interface ContentBoxType {
  title?: string;
  text: string;
  link?: string;
  boxid: string;
  imageUrl?: string;
  location:
    | {
        top: number;
        left: number;
      }
    | undefined;
}

const ContentBox: React.FC<{
  title?: string;
  text: string;
  link?: string;
  boxno: string;
  imageUrl?: string;
  location?: {
    left: number;
    top: number;
  };
  children?: React.ReactNode;
  zIndex: number;
  bringToFront: () => void;
}> = ({ title, text, boxno, imageUrl, location, zIndex, bringToFront }) => {
  const left = location?.left ?? 0;
  const top = location?.top ?? 0;

  return (
    <Draggable bringToFront={bringToFront} zIndex={zIndex}>
      <Parallax speed={10} className="parallax-box">
        <div
          className={`content-box ${boxno}`}
          style={{
            left: `${left}rem`,
            top: `${top}rem`,
          }}
          onMouseDown={bringToFront}
        >
          <h2>{title || "Subtitle"}</h2>
          {imageUrl ? (
            <img src={imageUrl} alt="Content image" style={{ width: "100%" }} />
          ) : (
            <></>
          )}
          <p>{text}</p>
          <button>Button</button>
        </div>
      </Parallax>
    </Draggable>
  );
};

export default ContentBox;
