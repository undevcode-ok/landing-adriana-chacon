"use client";
import { useState } from "react";
import { Inter_Tight, Barlow_Condensed } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faPinterest,
  faFacebook,
  faLinkedin,
  faXTwitter,
  faTiktok,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
import { FOOTER_DATA } from "../data/footer.data";
import { useNewsletter } from "../hooks/use_newsletter";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

const SOCIAL_ICONS = {
  Facebook:  { icon: faFacebook,  ring: "#1877F2" },
  Instagram: { icon: faInstagram, ring: "#E1306C" },
  YouTube:   { icon: faYoutube,   ring: "#FF0000" },
  Pinterest: { icon: faPinterest, ring: "#E60023" },
  LinkedIn:  { icon: faLinkedin,  ring: "#0A66C2" },
  X:         { icon: faXTwitter,  ring: "#ffffff"  },
  TikTok:    { icon: faTiktok,    ring: "#69C9D0" },
  Tumblr:    { icon: faTumblr,    ring: "#35465C" },
};

/* -- Organic background shapes -- */
function OrganicBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-60,360 Q0,320 50,390 Q100,460 60,510 Q20,560 -50,545 Q-120,530 -130,460 Q-140,390 -60,360Z"
        fill="#b5ead7" opacity="0.08"
      />
      <path
        d="M1400,380 Q1450,410 1450,470 Q1450,530 1390,545 Q1330,560 1310,500 Q1290,440 1340,410 Q1375,390 1400,380Z"
        fill="#ffdac1" opacity="0.09"
      />
      <circle cx="720" cy="520" r="200" fill="#F5E642" opacity="0.04" />
      <circle cx="200" cy="520" r="120" fill="#1DAB8E" opacity="0.05" />
      <circle cx="1200" cy="520" r="150" fill="#c9b8f0" opacity="0.06" />
    </svg>
  );
}

/* -- Social icon button with ring hover effect -- */
function SocialIconButton({ s }: { s: (typeof FOOTER_DATA.socials)[number] }) {
  const [hovered, setHovered] = useState(false);
  const meta = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
  if (!meta) return null;

  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.06)",
        border: `2px solid ${hovered ? meta.ring : "rgba(255,255,255,0.12)"}`,
        boxShadow: hovered ? `0 0 10px ${meta.ring}55` : "none",
        color: hovered ? meta.ring : "rgba(255,255,255,0.45)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease",
        flexShrink: 0,
      }}
    >
      <FontAwesomeIcon icon={meta.icon} style={{ width: 18, height: 18 }} />
    </a>
  );
}

function SocialIcons({ socials }: { socials: typeof FOOTER_DATA.socials }) {
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {socials.map((s) => (
        <SocialIconButton key={s.label} s={s} />
      ))}
    </div>
  );
}

/* -- Reusable logo + tagline + description -- */
function LogoBlock({
  size,
  tagline,
  description,
}: {
  size: "sm" | "lg";
  tagline: string[];
  description: string;
}) {
  const logoSize   = size === "lg" ? 76 : 60;
  const logoRadius = size === "lg" ? 18 : 14;
  const logoTextCls = size === "lg" ? "text-3xl" : "text-2xl";

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`${barlow.className} ${logoTextCls} flex items-center justify-center text-black`}
        style={{
          background: "#F5E642",
          borderRadius: logoRadius,
          transform: "rotate(-10deg)",
          boxShadow: "3px 3px 0 rgba(255,255,255,0.15)",
          width: logoSize,
          height: logoSize,
          flexShrink: 0,
        }}
      >
        Logo
      </div>
      <p
        className={`${barlow.className} text-white uppercase leading-none`}
        style={{
          fontSize:
            size === "lg"
              ? "clamp(1.6rem, 1.9vw, 2.4rem)"
              : "clamp(1.8rem, 6vw, 2.4rem)",
        }}
      >
        {tagline[0]}
        <br />
        <span className="text-7xl" style={{ color: "#1DAB8E" }}>{tagline[1]}</span>
        <br />
        Adriana Chacón
      </p>
      <p className="text-sm sm:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
        {description}
      </p>
    </div>
  );
}

/* -- Reusable nav column -- */
function NavColumn({ col }: { col: (typeof FOOTER_DATA.columns)[number] }) {
  return (
    <div className="flex flex-col gap-3">
      <p
        className={`${barlow.className} text-white text-base sm:text-2xl uppercase tracking-wider pb-2 border-b`}
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        {col.title}
      </p>
      <ul className="flex flex-col gap-2">
        {col.links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -- Reusable contact block -- */
function ContactBlock({
  address,
  email,
  instagram,
}: {
  address: string;
  email: string;
  instagram: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p
        className={`${barlow.className} text-white uppercase text-2xl tracking-wider pb-2 border-b`}
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        Contacto
      </p>
      <div className="flex flex-col gap-2">
        {[
          { icon: "📍", text: address },
          { icon: "✉️", text: email },
          { icon: "📷", text: instagram },
        ].map(({ icon, text }) => (
          <p
            key={text}
            className="text-sm leading-snug"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {icon} {text}
          </p>
        ))}
      </div>
    </div>
  );
}

/* -- Newsletter -- */
function Newsletter() {
  const { email, setEmail, sent, submit } = useNewsletter();
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        className={`${interTight.className} text-xs font-semibold mb-3`}
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        Recibí novedades del taller
      </p>
      {sent ? (
        <p
          className={`${interTight.className} text-xs font-bold`}
          style={{ color: "#1DAB8E" }}
        >
          ¡Gracias! Te avisamos pronto 🎨
        </p>
      ) : (
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Tu email"
            className={`${interTight.className} flex-1 text-xs rounded-full px-4 py-2 outline-none`}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
            }}
          />
          <button
            onClick={submit}
            className="group rounded-full px-4 py-2 text-xs font-extrabold border-none cursor-pointer transition-colors duration-200 hover:bg-amber-400 overflow-hidden"
            style={{ background: "#F5E642", color: "#1a1a1a" }}
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

/* -- Dev credit -- */
function DevCredit() {
  return (
    <p
      className={`${interTight.className} text-sm flex items-center gap-1`}
      style={{ color: "rgba(255,255,255,0.25)" }}
    >
      Desarrollado con&nbsp;
      <span style={{ color: "#1DAB8E", fontWeight: 700 }}>❤</span>
      &nbsp;por el equipo de&nbsp;
      <a
        href="https://undevcode.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold transition-colors duration-200"
        style={{ color: "rgba(255,255,255,0.25)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "#1DAB8E";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)";
        }}
      >
        undevcode
      </a>
    </p>
  );
}

/* ======================================================
   MAIN FOOTER
   -----------------------------------------------------
   Breakpoints:
   * default  (< 640px)   → MOBILE:   1 col stacked
   * sm       (640-767px) → TABLET:   2 col top + nav row
   * md       (768-1023px)→ TABLET+:  2 col top + nav row (wider)
   * lg       (1024-1279) → NOTEBOOK: 4-col grid, compact
   * xl       (1280px+)   → DESKTOP:  4-col grid, generous
   ====================================================== */
export function Footer() {
  const {
    tagline,
    description,
    address,
    email,
    instagram,
    socials,
    columns,
    copyright,
  } = FOOTER_DATA;

  const wrapperCls = "relative z-10 w-full mx-auto px-5 sm:px-8 lg:px-10 xl:px-16 max-w-[600px] sm:max-w-none lg:max-w-[1100px] xl:max-w-[1360px]";

  return (
    <footer
      className={`${interTight.className} relative w-full overflow-hidden`}
      style={{ background: "#1a1a1a" }}
    >
      {/* Rainbow top stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #b5ead7, #ffdac1, #a8d8ea, #c9b8f0, #F5E642, #1DAB8E)",
        }}
      />

      <OrganicBg />

      {/* ==================== TOP CONTENT ==================== */}
      <div className={`${wrapperCls} pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-14 xl:pt-16`}>

        {/* -- MOBILE (< 640px): single column -- */}
        <div className="flex flex-col gap-8 sm:hidden">
          <LogoBlock size="sm" tagline={tagline} description={description} />

          <div className="grid grid-cols-2 gap-6">
            {columns.map((col) => <NavColumn key={col.title} col={col} />)}
          </div>

          <div className="flex flex-col gap-4">
            <ContactBlock address={address} email={email} instagram={instagram} />
            <SocialIcons socials={socials} />
          </div>
        </div>

        {/* -- TABLET (640px - 1023px): 2-col top + nav row -- */}
        <div className="hidden sm:flex flex-col gap-10 lg:hidden">
          {/* Row 1: logo-left, contact+newsletter-right */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <LogoBlock size="sm" tagline={tagline} description={description} />
            <div className="flex flex-col gap-4">
              <ContactBlock address={address} email={email} instagram={instagram} />
              <SocialIcons socials={socials} />
            </div>
          </div>

          {/* Row 2: nav columns */}
          <div
            className="grid gap-8 pt-8 border-t"
            style={{
              gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {columns.map((col) => <NavColumn key={col.title} col={col} />)}
          </div>
        </div>

        {/* -- NOTEBOOK 14-15.6" (1024px - 1279px): 4-col compact -- */}
        <div
          className="hidden lg:grid xl:hidden"
          style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1.15fr", gap: "2.5rem" }}
        >
          <LogoBlock size="lg" tagline={tagline} description={description} />
          {columns.map((col) => <NavColumn key={col.title} col={col} />)}
          <div className="flex flex-col gap-4">
            <ContactBlock address={address} email={email} instagram={instagram} />
            <SocialIcons socials={socials} />
          </div>
        </div>

        {/* -- DESKTOP (1280px+): 4-col generous -- */}
        <div
          className="hidden xl:grid"
          style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: "3.5rem" }}
        >
          <LogoBlock size="lg" tagline={tagline} description={description} />
          {columns.map((col) => <NavColumn key={col.title} col={col} />)}
          <div className="flex flex-col gap-4">
            <ContactBlock address={address} email={email} instagram={instagram} />
            <SocialIcons socials={socials} />
          </div>
        </div>
      </div>

      {/* ==================== DIVIDER ==================== */}
      <div className={wrapperCls}>
        <div className="h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* ==================== BOTTOM BAR ==================== */}
      <div className={`${wrapperCls} py-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:items-center`}>
        <p
          className="text-sm text-center sm:text-left order-2 sm:order-1"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {copyright}
        </p>
        <div className="order-1 sm:order-2">
          <DevCredit />
        </div>
      </div>
    </footer>
  );
}