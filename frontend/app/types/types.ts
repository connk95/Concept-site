export interface ContentBoxType {
  id: string | null;
  slug: string | null;
  title: string | null;
  text: string | null;
  imageUrl?: string;
  buttonLink?: string;
  location?: {
    top: number;
    left: number;
  };
  remWidth?: number | null;
  children?: React.ReactNode;
  zIndex?: number;
  layout?: string;
  blur?: boolean;
  bringToFront?: () => void;
}
