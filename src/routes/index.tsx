import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import * as S from "@/components/screens";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "智学会 · 小程序前端 Demo" },
      { name: "description", content: "智学会小程序 14 个界面的杂志极简风格前端 demo" },
    ],
  }),
  component: Index,
});

const screens: { id: string; label: string; node: React.ReactNode; tab?: "meeting" | "schedule" | "me"; hideTab?: boolean }[] = [
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
  return (
    <div className="min-h-screen bg-paper-deep">
      {/* Masthead */}
      <header className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-baseline justify-between">
            <div className="font-mono text-[11px] tracking-[0.35em] uppercase text-ink-soft">
              Established 2026 · 南京 · Issue Nº 01
            </div>
            <div className="font-mono text-[11px] tracking-[0.35em] uppercase text-ink-soft">
              06 / 08 / 2026
            </div>
          </div>
          <h1 className="font-display text-[88px] leading-[0.95] text-ink mt-6">
            智学会 <em className="text-accent">Quarterly</em>
          </h1>
          <p className="font-serif italic text-[18px] text-ink-soft mt-4 max-w-2xl">
            A magazine-grade reading room for the 智学会 mini-program — fourteen screens, hand-set
            in cream paper, deep ink and a single stroke of terracotta.
          </p>
          <div className="mt-6 flex items-center gap-4 font-mono text-[11px] tracking-widest uppercase text-ink-soft">
            <span className="px-2 py-1 border border-ink text-ink">14 Screens</span>
            <span>Frontend Demo</span>
            <span>·</span>
            <span>WeChat Mini-Program</span>
          </div>
        </div>
      </header>

      {/* Table of contents */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-b border-rule">
        <div className="grid md:grid-cols-[1fr_3fr] gap-10">
          <div>
            <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent">Contents</div>
            <h2 className="font-display text-[36px] text-ink mt-2 leading-tight">目录 · 14 个界面</h2>
            <p className="font-serif italic text-[13px] text-ink-soft mt-3">
              点击任意条目，进入手机框预览。
            </p>
          </div>
          <ol className="divide-y divide-rule border-y border-rule">
            {screens.map((s) => (
              <li key={s.id}>
                <Link
                  to="/p/$id"
                  params={{ id: s.id }}
                  className="flex items-baseline gap-6 py-4 group hover:text-accent"
                >
                  <span className="font-mono text-[12px] tracking-widest text-ink-soft w-12">P{s.id}</span>
                  <span className="font-display text-[22px] text-ink group-hover:text-accent flex-1">
                    {s.label}
                  </span>
                  <span className="font-mono text-[11px] tracking-widest text-ink-soft">View →</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Spread */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent">The Spread</div>
            <h2 className="font-display text-[36px] text-ink leading-tight mt-2">十四帧 · 同台呈现</h2>
          </div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-ink-soft hidden md:block">
            All screens · 375 × 812
          </div>
        </div>

        <div
          className="grid gap-10 justify-items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(395px,1fr))" }}
        >
          {screens.map((s) => (
            <Link key={s.id} to="/p/$id" params={{ id: s.id }} className="block">
              <PhoneFrame
                code={`P${s.id}`}
                label={s.label}
                tab={s.tab}
                hideTab={s.hideTab}
              >
                {s.node}
              </PhoneFrame>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft">
          <span>智学会 · 前端 Demo</span>
          <span>Set in Instrument Serif & Inter</span>
          <span>© 2026 NUFE</span>
        </div>
      </footer>
    </div>
  );
}
