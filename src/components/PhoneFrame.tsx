import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface Props {
  children: ReactNode;
  label?: string;
  code?: string;
  hideTab?: boolean;
  tab?: "meeting" | "schedule" | "me";
}

export function PhoneFrame({ children, label, code, hideTab, tab = "meeting" }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      {(label || code) && (
        <div className="flex items-baseline gap-3 text-ink">
          <span className="font-mono text-[11px] tracking-widest text-ink-soft uppercase">{code}</span>
          <h2 className="font-display text-2xl">{label}</h2>
        </div>
      )}
      <div
        className="relative rounded-[44px] bg-ink p-[10px] shadow-[0_30px_80px_-30px_rgba(15,30,65,0.45)]"
        style={{ width: 395 }}
      >
        <div
          className="phone-screen relative overflow-hidden rounded-[36px] bg-paper"
          style={{ width: 375, height: 812 }}
        >
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 z-50 text-[12px] font-mono text-ink">
            <span>9:41</span>
            <div className="notch absolute left-1/2 -translate-x-1/2 top-2 h-6 w-28 rounded-full bg-ink" />
            <span className="flex items-center gap-1">
              <span>•••</span>
              <span className="inline-block w-6 h-2.5 rounded-sm border border-ink relative">
                <span className="absolute inset-0.5 right-1 bg-ink rounded-[1px]" />
              </span>
            </span>
          </div>

          <div className="h-full overflow-y-auto pt-11" style={{ paddingBottom: hideTab ? 0 : 72 }}>
            {children}
          </div>

          {!hideTab && <BottomTab active={tab} />}
        </div>
      </div>
    </div>
  );
}

function BottomTab({ active }: { active: "meeting" | "schedule" | "me" }) {
  const items = [
    { id: "meeting", label: "会议中心", to: "/p/01", glyph: "◐" },
    { id: "schedule", label: "日程", to: "/p/13", glyph: "❍" },
    { id: "me", label: "我的", to: "/p/05", glyph: "◇" },
  ] as const;
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-paper/95 backdrop-blur border-t border-rule flex items-end justify-around pb-3 pt-2">
      {items.map((it) => {
        const on = it.id === active;
        return (
          <Link
            key={it.id}
            to={it.to}
            className="flex flex-col items-center gap-1 px-4"
          >
            <span className={`text-lg leading-none ${on ? "text-accent" : "text-ink-soft"}`}>
              {it.glyph}
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase ${
                on ? "text-ink font-medium" : "text-ink-soft"
              }`}
            >
              {it.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
