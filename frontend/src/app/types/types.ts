export interface ContentBoxType {
  title?: string;
  text: string;
  link?: string;
  boxid: string;
  imageUrl?: string;
  location?: {
    top: number;
    left: number;
  };
}

export type ContentBoxInputs = {
  title: string;
  text: string;
  boxId: string;
  location?: { top: number; left: number };
  imageurl?: string;
};
