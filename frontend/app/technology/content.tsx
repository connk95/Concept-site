import { HeroText } from "../components/HeroText";
import { NetworkContentCardType } from "../types/types";
import { CardStack } from "../components/CardStack";

type Props = {
  techStack: NetworkContentCardType[];
};

export const TechnologyContent: React.FC<Props> = ({ techStack }) => {
  const pageHeight = 40;

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <HeroText textArray={["TECH"]} />
      <div
        style={{
          display: "flex",
        }}
      >
        <CardStack cards={techStack} />
      </div>
    </div>
  );
};
