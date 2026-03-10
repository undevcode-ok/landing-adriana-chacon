export type HeroTabId = "workshops" | "parties";

export interface HeroTab {
  id: HeroTabId;
  label: string;
  bg: string;
  bgImage: string;
  title: string;
  subtitle: string;
  btnLabel: string;
  linkLabel: string;
  btnScrollTo: string;   
  linkScrollTo: string;
}