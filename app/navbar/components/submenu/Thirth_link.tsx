"use client";
import { MEMBRESIAS_CARDS, MEMBRESIAS_BOTTOM_LINKS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";

export function MegaMembresias({ onClose }: { onClose?: () => void }) {
  return (
    <div>
      <div className="grid gap-4 p-5" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {MEMBRESIAS_CARDS.map((c) => (
          <div key={c.title} className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: c.bg, minHeight: 190 }}>
            <span className="text-4xl">{c.emoji}</span>
            <h3 className="font-display text-xl">{c.title}</h3>
            <div className="flex-1" />
            <button className="bg-black text-white font-extrabold rounded-full px-4 py-2 text-xs
              self-start hover:opacity-80 transition-opacity">
              {c.btn}
            </button>
          </div>
        ))}
      </div>
      <BottomLinks links={MEMBRESIAS_BOTTOM_LINKS}  onClose={onClose}/>
    </div>
  );
}
