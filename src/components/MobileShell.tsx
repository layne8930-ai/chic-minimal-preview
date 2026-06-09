import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface Props {
  children: ReactNode;
  hideTab?: boolean;
  tab?: "meeting" | "schedule" | "me";
}

/**
 * 全屏移动端外壳：不再使用桌面手机外框。
 * 页面以 100vw × 100dvh 直接渲染，等同于小程序 / 移动 H5 页面状态。
 * 保留 .phone-screen 类以继承统一圆角等视觉补丁。
 */
export function MobileShell({ children, hideTab, tab = "meeting" }: Props) {
  return (
    <div
      className="phone-screen relative w-screen overflow-hidden bg-paper text-ink"
      style={{ height: "100dvh" }}
    >
      <div
        className="h-full overflow-y-auto"
        style={{ paddingBottom: hideTab ? 0 : 72 }}
      >
        {children}
      </div>
      {!hideTab && <BottomTab active={tab} />}
    </div>
  );
}

function BottomTab({ active }: { active: "meeting" | "schedule" | "me" }) {
  const items = [
    { id: "meeting", label: "会议中心", to: "/", glyph: "◐" },
    { id: "schedule", label: "日程", to: "/p/$id", params: { id: "13" }, glyph: "❍" },
    { id: "me", label: "我的", to: "/p/$id", params: { id: "05" }, glyph: "◇" },
  ] as const;
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-paper/95 backdrop-blur border-t border-rule flex items-end justify-around pb-3 pt-2 z-40">
      {items.map((it) => {
        const on = it.id === active;
        return (
          <Link
            key={it.id}
            to={it.to as any}
            params={(it as any).params}
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
