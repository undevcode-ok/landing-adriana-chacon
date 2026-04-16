export type TagColor = "pink" | "mint" | "lilac" | "yellow" | "default";
export type CategoryColor = "coral" | "mint" | "lilac" | "default";

export type WorkshopTag = {
  label: string;
  color: TagColor;
};

export type Workshop = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  time: string;
  location: string;
  duration: string;
  note?: string;
  price: number;
  currency: string;
  tags: WorkshopTag[];
  categoryId: string[];
  soldOut?: boolean;
};

export type Category = {
  id: string;
  label: string;
  color?: CategoryColor;
};