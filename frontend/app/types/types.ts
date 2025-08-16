export interface NetworkContentBoxType {
  id: string;
  slug?: string;
  title?: string;
  text?: string;
  imageUrl?: string;
  techImages?: string[];
  buttonLink?: string;
  location?: {
    top: number;
    left: number;
  };
  remWidth?: number;
  children?: React.ReactNode;
  zIndex?: number;
  layout?: string;
  blur?: boolean;
  bringToFront?: () => void;
}

export interface ImageBoxType {
  id: string | null;
  index?: number;
  slug?: string;
  imageUrl: string;
  location?: {
    top: number;
    left: number;
  };
  remSize?: {
    width: number;
    height: number;
  };
  zIndex: number;
  blur?: boolean;
  bringToFront?: () => void;
}

export interface NetworkContentCardType {
  id: string;
  slug?: string;
  title?: string;
  text?: string;
  imageUrl?: string;
  buttonLink?: string;
  remSize?: {
    height: number;
    width: number;
  };
  children?: React.ReactNode;
  layout?: string;
  blur?: boolean;
}

export interface DraggableGridProps {
  id: string;
  images: string[];
  cols?: number;
  remSize?: {
    width: number;
    height: number;
  };
  gap?: number;
  zIndexStack: string[];
  setZIndexStack: React.Dispatch<React.SetStateAction<string[]>>;
  bringToFront?: () => void;
}
