export type NavItemId = "talleres" | "cafes" | "fiestas" | "sedes" | "membresias";

export interface NavItem {
  id: NavItemId;
  lines: [string, string];
  iconName: string;
  iconColor: string;
}

export interface MegaTag {
  label: string;
}

export interface MegaCategoryCard {
  title: string;
  bg: string;
  tags: string[];
}

export interface BottomLink {
  label: string;
  sub?: string;
  href?: string;
}
