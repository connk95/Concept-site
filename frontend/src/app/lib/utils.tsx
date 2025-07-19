import { ContentBoxType } from "../components/ContentBox";

/**
 * Moves selected element to top of element stack
 * Higher elements are given larger z-indexes
 * @param boxid
 * @returns element stack
 */
export function bringToFront<T>(
  item: T,
  setStack: React.Dispatch<React.SetStateAction<T[]>>
) {
  setStack((prevStack) => [...prevStack.filter((i) => i !== item), item]);
}

/**
 * Logically randomizes location of elements on initial load
 * @param elements
 */
export const randomizeLocations = (
  elements: ContentBoxType[],
  setPageHeight: React.Dispatch<React.SetStateAction<number>>,
  setContent: React.Dispatch<React.SetStateAction<ContentBoxType[]>>
) => {
  elements.forEach((element, index) => {
    const previous = elements[index - 1];
    const pageWidth = screen.width / 16;
    const setX = (x: number) => {
      return x + Math.random() * (x + 10 - (x - 10)) + 15;
    };
    const setY = (y: number) => {
      return Math.random() * 30 + (y - 10);
    };

    if (index === 0) {
      element.location = {
        left: Math.random() * (10 - 5) + 5,
        top: Math.random() * (10 - 5) + 5,
      };
    } else if (previous?.location) {
      element.location = { left: 0, top: 0 };

      if (previous.location?.left > pageWidth - 48) {
        element.location.top =
          setY(previous.location?.top) + (Math.random() * (10 - 5) + 20);
        element.location.left = Math.random() * (10 - 0) + 5;
      } else {
        element.location.left = setX(previous.location.left);
        element.location.top = setY(previous.location.top);
        if (element.location.top < 10) {
          element.location.top += 10;
        }
      }
    }
    if (index == elements.length - 1 && element.location) {
      setPageHeight(element.location.top + 20);
    }
  });
  setContent([...elements]);
};

/**
 * Toggles blurred components when selected
 */
export const toggleBlur = (
  blurry: boolean,
  setBlurry: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const contentBoxes = document.querySelectorAll<HTMLElement>(".content-box");
  if (blurry === true) {
    setBlurry(false);
    contentBoxes.forEach((box) => {
      box.style.filter = "blur(0px)";
    });
  } else if (blurry === false) {
    setBlurry(true);
    contentBoxes.forEach((box) => {
      box.style.filter = "blur(2px)";
    });
  }
};
