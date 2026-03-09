"use client";
import { Inter_Tight, Barlow_Condensed } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
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
  YouTube:   { icon: faYoutube,   bg: "#FF0000" },
  Instagram: { icon: faInstagram, bg: "#E1306C" },
  Pinterest: { icon: faPinterest, bg: "#E60023" },
};

/* ── Organic dark shapes — only bottom/side ones ── */
function OrganicBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottom-left blob */}
      <path
        d="M-60,360 Q0,320 50,390 Q100,460 60,510 Q20,560 -50,545 Q-120,530 -130,460 Q-140,390 -60,360Z"
        fill="#b5ead7" opacity="0.08"
      />
      {/* Bottom-right blob */}
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

/* ── Social icon buttons ── */
function SocialIcons({ socials }: { socials: typeof FOOTER_DATA.socials }) {
  return (
    <div className="flex gap-3 mt-1">
      {socials.map((s) => {
        const meta = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
        if (!meta) return null;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-75"
            style={{ background: meta.bg }}
          >
            <FontAwesomeIcon icon={meta.icon} className="w-4! h-4! text-white" />
          </a>
        );
      })}
    </div>
  );
}

/* ── Newsletter mini-form ── */
function Newsletter() {
  const { email, setEmail, sent, submit } = useNewsletter();
  return (
    <div
      className="mt-3 rounded-2xl p-4"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className={`${interTight.className} text-xs font-semibold mb-3`}
        style={{ color: "rgba(255,255,255,0.6)" }}>
        Recibí novedades del taller
      </p>
      {sent ? (
        <p className={`${interTight.className} text-xs font-bold`} style={{ color: "#1DAB8E" }}>
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
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
          />
          <button
            onClick={submit}
            className="group rounded-full px-4 py-2 text-xs font-extrabold border-none cursor-pointer transition-colors duration-200 hover:bg-amber-400 overflow-hidden"
            style={{ background: "#F5E642", color: "#1a1a1a" }}
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Dev credit ── */
function DevCredit() {
  return (
    <p className={`${interTight.className} text-xs flex items-center gap-1`}
      style={{ color: "rgba(255,255,255,0.25)" }}>
      Desarrollado con&nbsp;
      <span style={{ color: "#1DAB8E", fontSize: "0.9rem", lineHeight: 1 }}>❤</span>
      &nbsp;por&nbsp;
      <a
        href="https://undevcode.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold transition-colors duration-200"
        style={{ color: "rgba(255,255,255,0.25)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1DAB8E"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"; }}
      >
        undevcode
      </a>
    </p>
  );
}

/* ── Main Footer ── */
export function Footer() {
  const { tagline, description, address, email, instagram, socials, columns, legal, copyright } = FOOTER_DATA;

  return (
    <footer
      className={`${interTight.className} relative w-full overflow-hidden`}
      style={{ background: "#1a1a1a" }}
    >
      {/* Gradient stripe top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #b5ead7, #ffdac1, #a8d8ea, #c9b8f0, #F5E642, #1DAB8E)" }}
      />

      <OrganicBg />

      {/* ── TOP GRID ── */}
      <div className="relative z-10 mx-auto
        px-5  pt-12 pb-10  max-w-[480px]
        sm:px-8 sm:pt-14   sm:max-w-[720px]
        lg:px-12 lg:pt-16  lg:max-w-[1100px]
        xl:px-16 xl:pt-20  xl:max-w-[1400px]"
      >
        {/* MOBILE / TABLET */}
        <div className="flex flex-col gap-10 lg:hidden">
          <div className="flex flex-col gap-5">
            <div
              className={`${barlow.className} flex items-center justify-center text-2xl text-black`}
              style={{ background: "#F5E642", borderRadius: 16, transform: "rotate(-10deg)", boxShadow: "3px 3px 0 rgba(255,255,255,0.15)", width: 64, height: 64, flexShrink: 0 }}
            >Logo</div>
            <p className={`${barlow.className} text-white uppercase leading-none`}
              style={{ fontSize: "clamp(2rem, 7vw, 2.8rem)" }}>
              {tagline[0]}<br /><span style={{ color: "#1DAB8E" }}>{tagline[1]}</span><br />{tagline[2]}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{description}</p>
            <SocialIcons socials={socials} />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className={`${barlow.className} text-white uppercase text-base tracking-wider pb-2 border-b`}
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-white/50 transition-colors duration-200 hover:text-white">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className={`${barlow.className} text-white uppercase text-base tracking-wider pb-2 border-b`}
              style={{ borderColor: "rgba(255,255,255,0.1)" }}>Contacto</p>
            <div className="flex flex-col gap-2">
              {[{ icon: "📍", text: address }, { icon: "✉️", text: email }, { icon: "📷", text: instagram }]
                .map(({ icon, text }) => (
                  <p key={text} className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{icon} {text}</p>
                ))}
            </div>
            <Newsletter />
          </div>
        </div>

        {/* LAPTOP / DESKTOP */}
        <div className="hidden lg:grid gap-12 xl:gap-16"
          style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr" }}>
          {/* Col 1: Logo */}
          <div className="flex flex-col gap-5">
            <div
              className={`${barlow.className} flex items-center justify-center text-3xl text-black`}
              style={{ background: "#F5E642", borderRadius: 18, transform: "rotate(-10deg)", boxShadow: "3px 3px 0 rgba(255,255,255,0.15)", width: 80, height: 80, flexShrink: 0 }}
            >Logo</div>
            <p className={`${barlow.className} text-white uppercase leading-none`}
              style={{ fontSize: "clamp(1.8rem, 2.2vw, 2.6rem)" }}>
              {tagline[0]}<br /><span style={{ color: "#1DAB8E" }}>{tagline[1]}</span><br />{tagline[2]}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{description}</p>
            <SocialIcons socials={socials} />
          </div>

          {/* Cols 2 & 3: Nav */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className={`${barlow.className} text-white uppercase tracking-wider pb-2 border-b`}
                style={{ fontSize: "1.05rem", borderColor: "rgba(255,255,255,0.1)" }}>{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-white/50 transition-colors duration-200 hover:text-white">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4: Contact + Newsletter */}
          <div className="flex flex-col gap-4">
            <p className={`${barlow.className} text-white uppercase tracking-wider pb-2 border-b`}
              style={{ fontSize: "1.05rem", borderColor: "rgba(255,255,255,0.1)" }}>Contacto</p>
            <div className="flex flex-col gap-3">
              {[{ icon: "📍", text: address }, { icon: "✉️", text: email }, { icon: "📷", text: instagram }]
                .map(({ icon, text }) => (
                  <p key={text} className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>{icon} {text}</p>
                ))}
            </div>
            <Newsletter />
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="relative z-10 mx-auto
        px-5  max-w-[480px]
        sm:px-8 sm:max-w-[720px]
        lg:px-12 lg:max-w-[1100px]
        xl:px-16 xl:max-w-[1400px]"
      >
        <div className="h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-10 mx-auto
        px-5  py-6   max-w-[480px]
        sm:px-8      sm:max-w-[720px]
        lg:px-12     lg:max-w-[1100px]
        xl:px-16     xl:max-w-[1400px]
        flex flex-col items-center gap-3
        lg:flex-row  lg:justify-between lg:items-end"
      >
        {/* LEFT: copyright */}
        <div className="flex flex-col gap-1.5 items-center lg:items-start order-2 lg:order-1">
          <p className="text-xs text-center lg:text-left"
            style={{ color: "rgba(255,255,255,0.3)" }}>
            {copyright}
          </p>
        </div>

        {/* RIGHT: dev credit */}
        <div className="order-1 lg:order-2">
          <DevCredit />
        </div>
      </div>
    </footer>
  );
}