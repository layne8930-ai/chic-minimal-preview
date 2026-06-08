import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function NavBar({
  title,
  back = "/",
  right,
  serif = true,
}: {
  title: string;
  back?: string;
  right?: ReactNode;
  serif?: boolean;
}) {
  return (
    <div className="sticky top-0 z-30 bg-paper/95 backdrop-blur border-b border-rule">
      <div className="h-12 flex items-center justify-between px-4">
        <Link to={back} className="text-ink text-lg leading-none w-8">‹</Link>
        <h1 className={`${serif ? "font-display" : "font-sans font-medium"} text-[17px] text-ink`}>{title}</h1>
        <div className="w-8 text-right text-ink-soft">{right}</div>
      </div>
    </div>
  );
}

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="px-4 pt-6 pb-3">
      {kicker && (
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
          {kicker}
        </div>
      )}
      <h2 className="font-display text-[26px] leading-tight text-ink">{title}</h2>
      <div className="mt-3 h-px bg-ink/80 w-10" />
    </div>
  );
}

export function Tag({ children, tone = "ink" }: { children: ReactNode; tone?: "ink" | "accent" | "sage" | "muted" }) {
  const map = {
    ink: "border-ink text-ink",
    accent: "border-accent text-accent",
    sage: "border-sage text-sage",
    muted: "border-rule text-ink-soft",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 border ${map[tone]} px-2 py-0.5 text-[10px] tracking-[0.15em] uppercase font-mono`}
    >
      {children}
    </span>
  );
}

export function PrimaryButton({
  children,
  to,
  full,
}: {
  children: ReactNode;
  to?: string;
  full?: boolean;
}) {
  const cls = `inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-sm tracking-[0.2em] uppercase ${full ? "w-full" : ""}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}

export function GhostButton({
  children,
  to,
  full,
}: {
  children: ReactNode;
  to?: string;
  full?: boolean;
}) {
  const cls = `inline-flex items-center justify-center border border-ink text-ink px-6 py-3 text-sm tracking-[0.2em] uppercase ${full ? "w-full" : ""}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}
