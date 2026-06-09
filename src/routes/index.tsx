import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import * as S from "@/components/screens";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "智学会 · 小程序前端 Demo" },
      { name: "description", content: "智学会小程序 14 个界面的蓝色极简学术风前端 demo" },
    ],
  }),
  component: Index,
});

type Tab = "meeting" | "schedule" | "me";
const screens: { id: string; label: string; node: React.ReactNode; tab?: Tab; hideTab?: boolean }[] = [
  { id: "01", label: "会议中心", node: <S.P01 />, tab: "meeting" },
  { id: "02", label: "会议详情", node: <S.P02 />, hideTab: true },
  { id: "03", label: "登录引导", node: <S.P03 />, hideTab: true },
  { id: "04", label: "身份选择", node: <S.P04 />, hideTab: true },
  { id: "05", label: "我的 · 参会者", node: <S.P05 />, tab: "me" },
  { id: "06", label: "报名表单", node: <S.P06 />, hideTab: true },
  { id: "07", label: "我的票", node: <S.P07 />, hideTab: true },
  { id: "08", label: "电子票", node: <S.P08 />, hideTab: true },
  { id: "09", label: "扫码签到", node: <S.P09 />, hideTab: true },
  { id: "10", label: "我的 · 志愿者", node: <S.P10 />, tab: "me" },
  { id: "11", label: "招募大厅", node: <S.P11 />, tab: "meeting" },
  { id: "12", label: "招募详情", node: <S.P12 />, hideTab: true },
  { id: "13", label: "任务看板", node: <S.P13 />, tab: "schedule" },
  { id: "14", label: "培训中心", node: <S.P14 />, hideTab: true },
];

function Index() {
  const [active, setActive] = useState("01");
  const current = screens.find((s) => s.id === active) ?? screens[0];

  return (
    <div className="min-h-screen bg-paper-deep text-ink">
      {/* slim app bar — 单色蓝学术风，刻意低调 */}
      <header className="border-b border-rule bg-paper">
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <span className="font-display text-[22px] leading-none">智学会</span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft">
              Mini-Program · Frontend Demo
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft">
            14 Screens · WeChat 375×812
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-10">
        {/* Left: 页面索引 */}
        <aside className="order-2 lg:order-1">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Pages</div>
          <ol className="border-t border-rule">
            {screens.map((s) => {
              const on = s.id === active;
              return (
                <li key={s.id} className="border-b border-rule">
                  <button
                    onClick={() => setActive(s.id)}
                    className={`w-full flex items-baseline gap-3 py-2.5 text-left transition-colors ${
                      on ? "text-accent" : "text-ink hover:text-accent"
                    }`}
                  >
                    <span className="font-mono text-[11px] tracking-widest text-ink-soft w-9">P{s.id}</span>
                    <span className="font-serif text-[15px] flex-1">{s.label}</span>
                    {on && <span className="text-accent text-xs">●</span>}
                  </button>
                </li>
              );
            })}
          </ol>
          <Link
            to="/p/$id"
            params={{ id: active }}
            className="mp-pill mt-6 inline-flex items-center justify-center w-full border border-ink text-ink py-2.5 text-[11px] tracking-[0.25em] uppercase font-mono hover:bg-ink hover:text-paper transition-colors"
          >
            独立预览 P{active} →
          </Link>
        </aside>

        {/* Center: 小程序前端直出 */}
        <section className="order-1 lg:order-2 flex flex-col items-center">
          <div className="mb-5 text-center">
            <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-ink-soft">
              Page {active} / 14
            </div>
            <h1 className="font-display text-[32px] leading-tight mt-1">{current.label}</h1>
          </div>

          <PhoneFrame tab={current.tab} hideTab={current.hideTab}>
            {current.node}
          </PhoneFrame>

          <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase">
            <button
              onClick={() => {
                const i = screens.findIndex((s) => s.id === active);
                setActive(screens[(i - 1 + screens.length) % screens.length].id);
              }}
              className="mp-pill border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
            >
              ‹ Prev
            </button>
            <span className="text-ink-soft">P{active}</span>
            <button
              onClick={() => {
                const i = screens.findIndex((s) => s.id === active);
                setActive(screens[(i + 1) % screens.length].id);
              }}
              className="mp-pill border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
            >
              Next ›
            </button>
          </div>
        </section>

        {/* Right: 主题说明 */}
        <aside className="order-3 hidden lg:block">
          <div className="border border-rule rounded-2xl bg-paper p-6">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Theme</div>
            <h3 className="font-display text-[22px] leading-tight mt-1">蓝色极简学术风</h3>
            <p className="font-serif text-[13px] text-ink-soft leading-6 mt-3">
              单一品牌色构建的学术杂志体系。Paper、Ink、Rule、Accent
              四档语义令牌驱动全部界面，可直接复用至 PC 管理端。
            </p>

            <div className="mt-5 space-y-3">
              {[
                ["--paper", "var(--paper)"],
                ["--paper-deep", "var(--paper-deep)"],
                ["--rule", "var(--rule)"],
                ["--ink-soft", "var(--ink-soft)"],
                ["--ink", "var(--ink)"],
                ["--accent", "var(--accent)"],
              ].map(([name, val]) => (
                <div key={name} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg border border-rule"
                    style={{ background: val }}
                  />
                  <span className="font-mono text-[11px] text-ink">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border border-rule rounded-2xl bg-paper p-6">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Stack</div>
            <ul className="mt-3 space-y-2 font-mono text-[11px] text-ink-soft">
              <li>· 14 个完整小程序界面</li>
              <li>· 单色蓝学术语义令牌</li>
              <li>· 圆角统一 12 / 14 / 16px</li>
              <li>· 可直接迁移至 PC 管理端</li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className="border-t border-rule mt-10">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft">
          <span>智学会 · 小程序前端 Demo</span>
          <span>© 2026 NUFE</span>
        </div>
      </footer>
    </div>
  );
}
