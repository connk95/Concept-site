export interface NetworkContentBoxType {
  id: string;
  slug?: string;
  title?: string;
  text?: string;
  imageUrl?: string;
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
  slug?: string;
  image: string;
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
