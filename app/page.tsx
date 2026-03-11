"use client";

import { Navbar } from "@/app/navbar/components/Navbar";
import { Hero }   from "@/app/hero/components/Hero";
import { useNavbar } from "./navbar/hooks/use_nav";
import { Social } from "@/app/social/components/social_section";
import { Recommendations } from "@/app/recommendations/components/recommendations_section";
import { Footer } from "./footer/components/Footer";
import { Paintings } from "./paintings/components/paitings_section";
import { WorkshopSection } from "./workshops/components/Workshops_section";

export default function Home() {
  const { openMenu, toggleMenu, closeMenu } = useNavbar();

  return (
    <>
      <Navbar openMenu={openMenu} toggleMenu={toggleMenu} closeMenu={closeMenu} />

      <main className="lg:h-screen lg:overflow-y-scroll  lg:snap-mandatory">

        <section className="lg:h-screen lg:overflow-hidden lg:snap-start">
          <Hero onOpenMenu={toggleMenu} />
        </section>

        <section id="social" className="lg:h-screen lg:overflow-hidden lg:snap-start flex flex-col">
          <Social />
        </section>

        <section id="workshop" className="lg:h-screen lg:overflow-hidden lg:snap-start" style={{ scrollMarginTop: "140px" }}>
          <WorkshopSection />
        </section>

        <section id="rocommendations" className="lg:h-screen lg:overflow-hidden lg:snap-start">
          <Recommendations />
        </section>

        <section id="gallery" className="lg:h-screen lg:overflow-hidden lg:snap-start">
          <Paintings />
        </section>

        <section id="contact">
          <Footer onOpenMenu={toggleMenu} />
        </section>

      </main>
    </>
  );
}