export interface ContentBoxType {
  title?: string;
  text: string;
  link?: string;
  boxId: string;
  imageUrl?: string;
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

export type ContentBoxInputs = {
  title: string;
  text: string;
  link?: string;
  boxId: string;
  location?: { top: number; left: number };
  remWidth?: number | null;
  imageUrl?: string;
};
