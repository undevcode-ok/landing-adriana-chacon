export interface PaintingTag {
  label: string;
  color: string;      // background color of the pill
  textColor?: string; // optional, defaults to #fff
}

export interface PaintingCard {
  id: string;
  date: string;
  time: string;
  image: string;
  tags: PaintingTag[];
  title: string;
  subtitle: string;
  chips: { icon: "calendar" | "user" | "pin" | "clock" | "frame" | "check" | "x"; label: string; accent?: string }[];
  price: string;
  blobColors: [string, string, string, string]; // [c1, c2, c3, c4]
}

export interface PaintingsRow {
  id: string;
  bigTitle: string;
  bigTitleColor?: string; // defaults to #1a1a1a
  bgColor: string;        // background of the inner colored card
  sectionTitle: string;
  ctaLabel: string;
  ctaHref: string;
  blobColors: [string, string, string, string]; // for the outer section border
  cards: PaintingCard[];
}