export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialPill {
  label: string;
  href: string;
  bg: string;
}

export interface FooterData {
  tagline: string[];
  description: string;
  address: string;
  email: string;
  instagram: string;
  socials: SocialPill[];
  columns: FooterColumn[];
  legal: FooterLink[];
  copyright: string;
}